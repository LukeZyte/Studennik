import { createContext, useEffect, useLayoutEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import API_URL from "../constants/api";

export const authCtx = createContext({
  isAuthenticated: false,
  ready: false, // true - if already tried to autologin the user
  signedUser: { id: null, login: null, email: null },
  authenticate: () => {},
  logout: () => {},
});

const AuthCtxProvider = ({ children }) => {
  useLayoutEffect(() => {
    const getUserId = async () => {
      const userId = await getUserIdFromTheSecureStore();
      if (!userId) {
        setReady(true);
        console.log("userId = null");
        return;
      }
      console.log("Autologin...");
      fetch(`${API_URL}/auth/getUserById/${userId}`)
        .then((res) => {
          return res.json();
        })
        .then(({ user }) => {
          console.log(user);
          setReady(true);
          setSignedUser({
            id: user.id,
            login: user.login,
            email: user.email,
          });
        })
        .catch((err) => {
          return console.log(`${err} - blad`);
        })
        .finally(() => {
          setReady(true);
        });
    };

    getUserId();
  }, [setReady, setSignedUser]);

  const [ready, setReady] = useState(false);
  const [signedUser, setSignedUser] = useState({
    id: null,
    login: null,
    email: null,
  });

  const authenticate = (user) => {
    setSignedUser({ id: user.id, login: user.login, email: user.email });
    setUserIdSecureStore(user.id);
  };

  const logout = () => {
    setSignedUser({ id: null, login: null, email: null });
    setUserIdSecureStore(null);
  };

  // Secure Store
  const getUserIdFromTheSecureStore = async () => {
    let userId = await SecureStore.getItemAsync("loggedUserId");
    if (userId === "null") {
      userId = null; // I can't believe I had to do this
    }
    console.log(`returning from SecureStore - ${userId}`);
    return userId;
  };

  const setUserIdSecureStore = async (value) => {
    const readyValue = JSON.stringify(value);
    await SecureStore.setItemAsync("loggedUserId", readyValue);
    console.log(`saving to SecureStore - ${value}`);
  };
  //

  const value = {
    signedUser: signedUser,
    ready: ready,
    isAuthenticated: !!signedUser.id,
    authenticate: authenticate,
    logout: logout,
  };
  return <authCtx.Provider value={value}>{children}</authCtx.Provider>;
};

export default AuthCtxProvider;
