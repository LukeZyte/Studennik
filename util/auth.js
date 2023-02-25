import API_URL from "../constants/api";

export const loginUser = (
  login,
  password,
  authenticate,
  setIsLoading,
  setAlert
) => {
  setIsLoading(true);
  fetch(`${API_URL}/auth/authUser`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      login: login,
      password: password,
    }),
  })
    .then((res) => res.json())
    .then(({ success, user }) => {
      if (success) {
        authenticate(user);
        console.log("Logged user successfully");
      } else {
        setAlert({
          visible: true,
          message:
            "Wprowadzono nieprawidłowy login lub hasło. Spróbuj ponownie wypełnić te dane.",
        });
        console.log("User could not be logged in");
      }
      setIsLoading(false);
    })
    .catch((err) => console.log(err));
};

export const createUser = (
  login,
  email,
  password,
  setIsLoading,
  setAlert,
  navigation
) => {
  setIsLoading(true);
  fetch(`${API_URL}/auth/createUser`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      login: login,
      password: password,
      email: email,
    }),
  })
    .then((res) => res.json())
    .then(({ success, message }) => {
      console.log("Post method done successfully from the frontend!");
      if (success) {
        console.log("User was created");
        setAlert({
          visible: true,
          message:
            "Pomyślnie utworzono nowe konto. Możesz się teraz zalogować.",
          OK: true,
        });
      } else {
        console.log("User already exists!");
        setAlert({
          visible: true,
          message:
            "Wprowadzona nazwa użytkownika jest już zajęta. Spróbuj użyć innego loginu.",
          OK: false,
        });
      }
      setIsLoading(false);
    })
    .catch((err) => console.log(`${err} - thats the error from auth.js`));
};
