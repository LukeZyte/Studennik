import { useState } from "react";
import { View } from "react-native";
import Card from "../UI/Card";
import OptionButton from "../UI/OptionButton";
import SubmitButton from "../UI/SubmitButton";
import TextInputUI from "../UI/TextInputUI";
import TextUI from "../UI/TextUI";

const LogInCard = ({ navigation }) => {
  const [enteredLogin, setEnteredLogin] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const loginHandler = () => {
    navigation.navigate("HomeScreen");
  };

  return (
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
        <SubmitButton style={{ marginBottom: 8 }} onPress={loginHandler}>
          Zaloguj się
        </SubmitButton>
        <OptionButton onPress={() => navigation.navigate("SignUpScreen")}>
          Załóż konto
        </OptionButton>
      </View>
    </Card>
  );
};

export default LogInCard;
