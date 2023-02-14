import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";
import { LightTheme } from "./constants/colors";
import WelcomeScreen from "./screens/WelcomeScreen";
import SignUpScreen from "./screens/SignUpScreen";
import GroupsListScreen from "./screens/GroupsListScreen";

import { AntDesign } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainNavigation = () => {
  const currentTheme = LightTheme;

  const HomeScreen = () => {
    return (
      <Drawer.Navigator
        screenOptions={{
          // drawerActiveBackgroundColor: currentTheme.colors.primary,
          drawerLabelStyle: {
            fontSize: 16,
          },
          drawerStyle: {
            backgroundColor: currentTheme.colors.background,
          },
        }}
      >
        <Drawer.Screen
          name="GroupsListScreen"
          component={GroupsListScreen}
          options={{
            headerTitle: "Lista grup",
            drawerLabel: "Lista grup",
            drawerIcon: ({ focused, size }) => (
              <AntDesign
                name="aliwangwang"
                size={size}
                color={
                  focused
                    ? currentTheme.colors.primary
                    : currentTheme.colors.textSecondary
                }
              />
            ),
          }}
        />
        <Drawer.Screen
          name="GroupsListScreen2"
          component={GroupsListScreen}
          options={{
            headerTitle: "Lista grup",
            drawerLabel: "Lista grup",
            drawerIcon: ({ focused, size }) => (
              <AntDesign
                name="aliwangwang"
                size={size}
                color={
                  focused
                    ? currentTheme.colors.primary
                    : currentTheme.colors.textSecondary
                }
              />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  };

  return (
    <NavigationContainer theme={currentTheme}>
      <StatusBar style="auto" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
