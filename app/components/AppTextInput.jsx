import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defultStlyles from "../config/styles";
function AppTextInput({ icon, width = "100%", ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defultStlyles.colors.medium}
          style={styles.icon}
        />
      )}

      <TextInput
        placeholderTextColor={defultStlyles.colors.medium}
        style={defultStlyles.text}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defultStlyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",

    padding: 15,
    marginVertical: 10,

    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    color: defultStlyles.colors.dark,
    fontSize: 18,
  },
});
export default AppTextInput;
