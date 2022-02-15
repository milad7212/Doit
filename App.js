import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Button,
  Platform,
  StatusBar,
  SafeAreaView,
  Dimensions,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  console.log(Dimensions.get("window"));
  const handelPress = () => {
    console.log("Text :>> ", "Text");
  };
  return (
    <>
      <View style={{ backgroundColor: "#fff", flex: 1 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: "dodgerblue",
            flexDirection: "row",
          }}
        >
          <View style={{ flex: 0.5, backgroundColor: "gold" }}></View>
        </View>
        <View
          style={{ flex: 1, backgroundColor: "dodgerblue", flexDirection: "row" }}
        >
          <View style={{ flex: 0.5, backgroundColor: "gold" }}></View>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "dodgerblue",
            flexDirection: "row",
          }}
        >
          <View style={{ flex: 0.5, backgroundColor: "gold" }}></View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  text: {
    color: "black",
  },
});
