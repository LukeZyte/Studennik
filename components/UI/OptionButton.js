import { useTheme } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";

const OptionButton = ({ children, style, onPress }) => {
  const { colors } = useTheme();

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          borderRadius: 160,
          padding: 16,
          alignItems: "center",
        },
        pressed && {
          backgroundColor: colors.backgroundSecondary,
        },
        style,
      ]}
    >
      <Text style={{ color: colors.primary, fontWeight: "bold", fontSize: 16 }}>
        {children}
      </Text>
    </Pressable>
  );
};

export default OptionButton;
