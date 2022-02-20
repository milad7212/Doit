import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defultStlyles from "../config/styles";
import AppText from "./AppText";
function AppPicker({ icon, placeholder, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defultStlyles.colors.medium}
          style={styles.icon}
        />
      )}
      <AppText style={styles.text}>{placeholder}</AppText>
      <MaterialCommunityIcons
        name="chevron-down"
        size={20}
        color={defultStlyles.colors.medium}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defultStlyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,

    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flexGrow: 1,
  },
});
export default AppPicker;
