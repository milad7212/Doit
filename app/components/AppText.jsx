import React from "react";
import { Text } from "react-native";
import defultstyles from "../config/styles";
function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={[defultstyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

export default AppText;
