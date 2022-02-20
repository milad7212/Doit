import React from "react";
import { Text } from "react-native";
import defultstyles from "../config/styles";
function AppText({ children, style }) {
  return <Text
  style={[defultstyles.text, style]}>{children}</Text>;
}

export default AppText;
