import React from "react";
import { Modal, StyleSheet, View } from "react-native";

function UploadScreen(props) {
  return (
    <Modal>
      <View style={styles.container}></View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default UploadScreen;
