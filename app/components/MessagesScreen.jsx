import React from "react";
import { FlatList, StyleSheet } from "react-native";
import ListItem from "./ListItem";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/sahra.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/sahra.jpg"),
  },
];
function MessagesScreen(props) {
  return (
    <FlatList
      data={messages}
      keyExtractor={(messages) => messages.id.toString()}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          subTitle={item.description}
          image={item.image}
        />
      )}
    />
  );
}
const styles = StyleSheet.create({});
export default MessagesScreen;
