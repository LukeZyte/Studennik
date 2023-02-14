import { ScrollView, View } from "react-native";
import Card from "../components/UI/Card";
import OptionButton from "../components/UI/OptionButton";
import SubmitButton from "../components/UI/SubmitButton";
import TextInputUI from "../components/UI/TextInputUI";
import { useTheme } from "@react-navigation/native";
import TextUI from "../components/UI/TextUI";
import { useState } from "react";

const SignUpScreen = ({ navigation }) => {
  const { colors } = useTheme();

  const [enteredLogin, setEnteredLogin] = useState({
    value: "",
    isValid: true,
  });
  const [enteredEmail, setEnteredEmail] = useState({
    value: "",
    isValid: true,
  });
  const [enteredPassword, setEnteredPassword] = useState({
    value: "",
    isValid: true,
  });
  const [enteredSecondPassword, setEnteredSecondPassword] = useState({
    value: "",
    isValid: true,
  });

  const submitHandler = () => {
    let isLoginOK = true;
    let isEmailOK = true;
    let isPasswordOK = true;
    let isSecondPasswordOK = true;

    if (
      enteredLogin.value.trim().length < 5 ||
      enteredLogin.value.trim().length > 20
    ) {
      isLoginOK = false;
      setEnteredLogin((prevState) => {
        return { value: prevState.value, isValid: false };
      });
    }

    if (!enteredEmail.value.includes("@")) {
      isEmailOK = false;
      setEnteredEmail((prevState) => {
        return { value: prevState.value, isValid: false };
      });
    }

    if (enteredPassword.value.trim().length < 5) {
      isPasswordOK = false;
      setEnteredPassword((prevState) => {
        return { value: "", isValid: false };
      });
    }

    if (enteredSecondPassword.value !== enteredPassword.value) {
      isSecondPasswordOK = false;
      setEnteredSecondPassword((prevState) => {
        return { value: "", isValid: false };
      });
    }

    if (isLoginOK && isEmailOK && isPasswordOK && isSecondPasswordOK) {
      navigation.navigate("WelcomeScreen");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "flex-end" }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 40,
        }}
      >
        <TextUI
          style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}
        >
          Wprowadź poprawny email, hasło najlepiej takie którego nie używasz
          nigdzie indziej ;)
        </TextUI>
      </View>
      <Card
        style={{
          elevation: 8,
          margin: 8,
          padding: 24,
        }}
      >
        <ScrollView>
          <TextUI
            style={{
              fontSize: 16,
              fontWeight: "bold",
              alignSelf: "center",
            }}
          >
            Tworzenie konta
          </TextUI>
          <TextInputUI
            label="Login"
            style={{ marginBottom: 8 }}
            placeholder="Nazwa użytkownika..."
            value={enteredLogin.value}
            onChangeText={(enteredText) => {
              setEnteredLogin({ value: enteredText, isValid: true });
            }}
            invalid={!enteredLogin.isValid}
          />
          <TextInputUI
            label="Adres e-mail"
            style={{ marginBottom: 8 }}
            placeholder="user@mail.com..."
            value={enteredEmail.value}
            onChangeText={(enteredText) => {
              setEnteredEmail({ value: enteredText, isValid: true });
            }}
            invalid={!enteredEmail.isValid}
          />
          <TextInputUI
            label="Hasło"
            style={{ marginBottom: 8 }}
            placeholder="Hasło..."
            secureTextEntry
            value={enteredPassword.value}
            onChangeText={(enteredText) => {
              setEnteredPassword({ value: enteredText, isValid: true });
            }}
            invalid={!enteredPassword.isValid}
          />
          <TextInputUI
            label="Powtórz hasło"
            style={{ marginBottom: 24 }}
            placeholder="Powtórzone hasło..."
            secureTextEntry
            value={enteredSecondPassword.value}
            onChangeText={(enteredText) => {
              setEnteredSecondPassword({ value: enteredText, isValid: true });
            }}
            invalid={!enteredSecondPassword.isValid}
          />
          <SubmitButton
            style={{ marginBottom: 8 }}
            onPress={() => submitHandler()}
          >
            Stwórz konto
          </SubmitButton>
          <OptionButton onPress={() => navigation.navigate("WelcomeScreen")}>
            Zaloguj się
          </OptionButton>
        </ScrollView>
      </Card>
    </View>
  );
};

export default SignUpScreen;
