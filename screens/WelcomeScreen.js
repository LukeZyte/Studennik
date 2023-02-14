import { View } from "react-native";
import TextUI from "../components/UI/TextUI";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import LogInCard from "../components/WelcomeScreen/LogInScreen";

const WelcomeScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1, justifyContent: "flex-end" }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AntDesign name="aliwangwang" size={96} color={colors.primary} />
        <TextUI
          style={{ fontSize: 64, fontWeight: "bold", textAlign: "center" }}
        >
          Witaj studencie
        </TextUI>
      </View>

      <View
        style={{
          justifyContent: "flex-end",
        }}
      >
        <LogInCard navigation={navigation} />
      </View>
    </View>
  );
};

export default WelcomeScreen;
