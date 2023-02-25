import { TouchableOpacity, View } from "react-native";
import TextUI from "../UI/TextUI";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

const DrawerButton = ({ children, icon, onPress }) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        alignItems: "center",
        // backgroundColor: "yellow",
        paddingVertical: 8,
        marginVertical: 4,
        // backgroundColor: "red",
      }}
    >
      <Ionicons
        name={icon}
        size={24}
        color={colors.text}
        style={{ marginRight: 16 }}
      />
      <TextUI style={{ fontSize: 16, fontWeight: "bold" }}>{children}</TextUI>
    </TouchableOpacity>
  );
};

export default DrawerButton;
