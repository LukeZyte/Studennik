import { useTheme } from "@react-navigation/native";
import { useState } from "react";
import { TextInput, View } from "react-native";
import TextUI from "./TextUI";

const TextInputUI = ({
  style,
  onChangeText,
  value,
  placeholder,
  keyboardType,
  label,
  secureTextEntry,
  invalid,
}) => {
  const { colors } = useTheme();

  const [isFocused, setIsFocused] = useState(false);

  return (
    <View>
      <TextUI
        style={[
          {
            alignSelf: "flex-start",
            marginLeft: 8,
            marginBottom: 2,
          },
          isFocused && { color: colors.primary },
          invalid && { color: colors.invalidInputText, fontWeight: "bold" },
        ]}
      >
        {label}
      </TextUI>
      <TextInput
        style={[
          {
            paddingHorizontal: 16,
            paddingVertical: 8,
            borderWidth: 2,
            borderColor: colors.inputBorder,
            borderRadius: 16,
            fontSize: 16,
          },
          isFocused && { borderColor: colors.primary },
          invalid && {
            backgroundColor: colors.invalidInputBackground,
            color: colors.invalidInputText,
          },
          style,
        ]}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default TextInputUI;
