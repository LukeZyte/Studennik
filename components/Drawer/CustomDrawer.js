import { View } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import TextUI from "../UI/TextUI";
import { useTheme } from "@react-navigation/native";
import { useContext } from "react";
import { authCtx } from "../../store/authCtx";
import DrawerButton from "./DrawerButton";

const CustomDrawer = (props) => {
  const { colors } = useTheme();
  const { signedUser, logout } = useContext(authCtx);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: colors.background }}
      >
        <View
          style={{
            backgroundColor: colors.primary,
            paddingBottom: 10,
            marginBottom: 10,
            paddingTop: 120,
            elevation: 8,
          }}
        >
          <TextUI
            style={{
              fontSize: 24,
              fontWeight: "bold",
              alignSelf: "center",
              color: colors.background,
            }}
          >
            {signedUser.login}
          </TextUI>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View
        style={{
          paddingHorizontal: 20,
          paddingBottom: 20,
          paddingTop: 8,
          borderTopWidth: 1,
          borderTopColor: colors.inputBorder,
        }}
      >
        <DrawerButton icon="contrast" onPress={() => {}}>
          Zmień motyw
        </DrawerButton>
        <DrawerButton icon="exit-outline" onPress={() => logout()}>
          Wyloguj
        </DrawerButton>
      </View>
    </View>
  );
};

export default CustomDrawer;
