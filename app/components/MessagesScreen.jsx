import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "./ListItem";
import ListItemDeleteAction from "./ListItemDeleteAction";
import Screen from "./Screen";

const initialMessages = [
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
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (message) => {
    //Delete the message from messages

    setMessages(messages.filter((m) => m.id !== messages.id));
    //Call the server
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log(item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
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
            {
              id: 3,
              title: "T1",
              description: "D1",
              image: require("../assets/sahra.jpg"),
            },
            {
              id: 4,
              title: "T2",
              description: "D2",
              image: require("../assets/sahra.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({});
export default MessagesScreen;
