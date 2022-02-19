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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";

export default function App() {
  console.log(Dimensions.get("window"));
  const handelPress = () => {
    console.log("Text :>> ", "Text");
  };
  return (
    <>
      <View
        style={{
          flex: 1,

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AppButton
          title="Login"
          onPress={() => console.log("tapp :>> ", "tapp")}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    color: "black",
  },
});
