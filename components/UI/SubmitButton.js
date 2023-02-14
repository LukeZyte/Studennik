import { useTheme } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";

const SubmitButton = ({ children, style, onPress }) => {
  const { colors } = useTheme();

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: colors.primary,
          borderRadius: 160,
          padding: 16,
          alignItems: "center",
        },
        pressed && {
          backgroundColor: colors.pressedPrimary,
        },
        style,
      ]}
    >
      <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
        {children}
      </Text>
    </Pressable>
  );
};

export default SubmitButton;
