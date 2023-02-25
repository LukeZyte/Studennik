import MainNavigation from "./MainNavigation";
import AuthCtxProvider, { authCtx } from "./store/authCtx";
import * as SplashScreen from "expo-splash-screen";
import {
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { View } from "react-native";

const AppPreparation = () => {
  const { ready } = useContext(authCtx);
  const [appIsReady, setAppIsReady] = useState(false);

  SplashScreen.preventAutoHideAsync();
  useEffect(() => {
    const prepare = async () => {
      // try {
      // loading stuff before the app opens
      // } catch (e) {
      // console.warn(e);
      // } finally {
      if (ready) {
        setAppIsReady(true);
      }
      // }
    };
    prepare();
  }, [setAppIsReady, ready]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <MainNavigation />
    </View>
  );
};

export default AppPreparation;
