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
  TextInput,
  Switch,
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
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/components/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItemDeleteAction from "./app/components/ListItemDeleteAction";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import { useEffect, useState } from "react";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import * as ImagePicker from "expo-image-picker";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
// const categories = [
//   { label: "Furniture", value: 1 },
//   { label: "Clothing", value: 2 },
//   { label: "Cameras", value: 3 },
// ];

export default function App() {
  const Link = () => {
    const navigation = useNavigation();
    return (
      <Button
        title="Click"
        onPress={() => navigation.navigate("TweetDetails")}
      />
    );
  };
  const Tweets = ({ navigation }) => (
    <Screen>
      <Text>Tweets</Text>
      <Button
        title="View Tweets"
        onPress={() => navigation.navigate("TweetDetails", { id: 1000 })}
      />
      <Link />
    </Screen>
  );
  const TweetDetails = ({ route }) => (
    <Screen>
      <Text>Tweet Details {route.params.id}</Text>
    </Screen>
  );
  const Stack = createNativeStackNavigator();
  const FeedNavigator = () => (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "dodgerblue",
        },
        headerTintColor: "white",
        headerShown: false,
      }}
    >
      <Stack.Screen name="Tweets" component={Tweets} options={{}} />
      <Stack.Screen
        name="TweetDetails"
        component={TweetDetails}
        options={({ route }) => ({ title: "Milad" })}
      />
    </Stack.Navigator>
  );
  // ######################___________________###########################

  const Account = () => (
    <Screen>
      <Text>Account</Text>
    </Screen>
  );

  const Tab = createBottomTabNavigator();
  const TabNavigator = () => (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>

    // <MessagesScreen />
    // <ListingsScreen />

    // <AppTextInput icon="email" placeholder="Email" />
    // <Screen>
    //   {/* <AppPicker
    //     selectedItem={category}
    //     onSelectItem={(item) => setCategory(item)}
    //     items={categories}
    //     icon="apps"
    //     placeholder="Category"
    //   />
    //   <AppTextInput icon="email" placeholder="Email" /> */}
    //   <LoginScreen />
    // </Screen>
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
