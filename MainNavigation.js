import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";
import { LightTheme } from "./constants/colors";
import WelcomeScreen from "./screens/WelcomeScreen";
import SignUpScreen from "./screens/SignUpScreen";
import ProfileScreen from "./screens/ProfileScreen";
import GroupsListScreen from "./screens/GroupsListScreen";
import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
import { authCtx } from "./store/authCtx";
import CustomDrawer from "./components/Drawer/CustomDrawer";
import CreateNewGroupScreen from "./screens/CreateNewGroupScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainNavigation = () => {
  const { isAuthenticated, authenticate, logout, ready } = useContext(authCtx);

  const currentTheme = LightTheme;

  const HomeScreen = () => {
    return (
      <Drawer.Navigator
        initialRouteName="GroupsListScreen"
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          // drawerActiveBackgroundColor: currentTheme.colors.primary,
          drawerLabelStyle: {
            fontSize: 16,
            fontWeight: "bold",
            marginLeft: -6,
          },
          drawerItemStyle: {
            paddingLeft: 6,
          },
          drawerStyle: {
            backgroundColor: currentTheme.colors.background,
          },
        }}
      >
        <Drawer.Screen
          name="PorfileScreen"
          component={ProfileScreen}
          options={{
            headerTitle: "Mój profil",
            drawerLabel: "Mój profil",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="GroupsListScreen"
          component={GroupsListScreen}
          options={{
            headerTitle: "Lista grup",
            drawerLabel: "Lista grup",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="list" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="CreateNewGroupScreen"
          component={CreateNewGroupScreen}
          options={{
            headerTitle: "Stwórz nową grupę",
            drawerLabel: "Stwórz nową grupę",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="create-outline" size={size} color={color} />
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
        {isAuthenticated ? (
          <>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
