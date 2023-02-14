import { useTheme } from "@react-navigation/native";
import { View } from "react-native";

const Card = ({ children, style }) => {
  const { colors } = useTheme();

  return (
    <View
      style={[
        { borderRadius: 16, padding: 4, backgroundColor: colors.background },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default Card;
