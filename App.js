// Third-party imports
import React, { useState } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Keyboard,
} from "react-native";
import { ImageBackground } from "react-native";
// import FastImage from 'react-native-fast-image';

// Local component imports
import AddTodo from "./components/addTodo";
import Header from "./components/header";
// import Sandbox from "./components/sandbox";
import TodoItem from "./components/todoItem";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy shampoo", key: "1" },
    { text: "buy soap", key: "2" },
    { text: "pay FPL bill", key: "3" },
    { text: "Groceries list", key: "4" },
    { text: "Switch to X-finity", key: "5" },
    { text: `Make Dr.'s appoinment`, key: "6" },
    { text: "Application online", key: "7" },
    { text: "Search local and remote jobs", key: "8" },
  ]);

  const deleteHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length >= 2) {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("OOPS", `"Item must equal or over 2 characters long"`, [
        { text: "Understood!", onPress: () => console.log("Alert closed") },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss(); // Android devices
      }}
    >
      <ImageBackground
        // source={{uri: "file:///Users/renzosilva/Downloads/pexels-angele-j-128402%20(2).jpg",
        // }}
        source={require("./assets/backgroundImage.jpg")}
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <Header />
          <View style={styles.content}>
            <AddTodo submitHandler={submitHandler} />
            <View style={styles.list}>
              <FlatList
                data={todos}
                renderItem={({ item }) => (
                  <TodoItem item={item} deleteHandler={deleteHandler} />
                )}
                contentContainerStyle={{ flexGrow: 1 }}
              />
            </View>
          </View>
          <StatusBar style="auto" />
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "lightblue",
    paddingTop: 43,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    // resizeMode: "cover", // You can change this to "contain" or other values as needed
    resizeMode: "cover",
    justifyContent: "center", // You can adjust this for positioning
    marginTop: 60,
    marginBottom: 40,
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
    marginHorizontal: 10,
  },
});
