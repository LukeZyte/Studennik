import { useCallback, useContext, useState } from "react";
import { View, ActivityIndicator, TouchableOpacity } from "react-native";
import Card from "../UI/Card";
import OptionButton from "../UI/OptionButton";
import SubmitButton from "../UI/SubmitButton";
import TextInputUI from "../UI/TextInputUI";
import TextUI from "../UI/TextUI";
import API_URL from "../../constants/api";
import * as SecureStore from "expo-secure-store";
import { authCtx } from "../../store/authCtx";
import { loginUser } from "../../util/auth";
import { useTheme } from "@react-navigation/native";
import { FancyAlert } from "react-native-expo-fancy-alerts";
import { Ionicons } from "@expo/vector-icons";

const LogInCard = ({ navigation }) => {
  const { colors } = useTheme();

  const [alert, setAlert] = useState({ visible: false, message: "" });
  const toggleAlert = useCallback(() => {
    setAlert({ visible: false, message: "" });
  }, [alert]);

  const [enteredLogin, setEnteredLogin] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { authenticate } = useContext(authCtx);

  const loginHandler = () => {
    loginUser(
      enteredLogin,
      enteredPassword,
      authenticate,
      setIsLoading,
      setAlert
    );
  };

  // Secure Store
  // const saveValueToSecureStore = async (key, value) => {
  //   await SecureStore.setItemAsync(key, value);
  // };

  return (
    <>
      <FancyAlert
        visible={alert.visible}
        icon={
          <View
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "red",
              borderRadius: 50,
              width: "100%",
            }}
          >
            <Ionicons name="close" size={32} color={colors.background} />
          </View>
        }
        style={{ backgroundColor: "white" }}
      >
        <TextUI
          style={{ marginTop: -20, marginBottom: 6, textAlign: "center" }}
        >
          {alert.message}
        </TextUI>
        <OptionButton onPress={toggleAlert}>OK</OptionButton>
      </FancyAlert>

      <Card
        style={{
          elevation: 8,
          margin: 8,
          padding: 24,
        }}
      >
        <View>
          <TextUI
            style={{
              fontSize: 16,
              fontWeight: "bold",
              alignSelf: "center",
            }}
          >
            Logowanie
          </TextUI>
          <TextInputUI
            label="Login"
            style={{ marginBottom: 8 }}
            placeholder="Twój login..."
            onChangeText={(enteredText) => setEnteredLogin(enteredText)}
          />
          <TextInputUI
            label="Hasło"
            style={{ marginBottom: 24 }}
            placeholder="Twoje hasło..."
            secureTextEntry
            onChangeText={(enteredText) => setEnteredPassword(enteredText)}
          />
          <View style={{ height: 115 }}>
            {isLoading ? (
              <View style={{ justifyContent: "center" }}>
                <ActivityIndicator size="large" color={colors.primary} />
                <TextUI
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    alignSelf: "center",
                  }}
                >
                  Logowanie
                </TextUI>
              </View>
            ) : (
              <>
                <SubmitButton
                  style={{ marginBottom: 8 }}
                  onPress={loginHandler}
                >
                  Zaloguj się
                </SubmitButton>
                <OptionButton
                  onPress={() => navigation.navigate("SignUpScreen")}
                >
                  Załóż konto
                </OptionButton>
              </>
            )}
          </View>
        </View>
      </Card>
    </>
  );
};

export default LogInCard;
