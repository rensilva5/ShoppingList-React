import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const TodoItem = ({ item, deleteHandler }) => {
  return (
    <TouchableOpacity onPress={() => deleteHandler(item.key)}>
      <View style={styles.item}>
        <MaterialIcons name="delete" size={24} color="lightblue" />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    // flex: 1,
    flexDirection: "row", // seat next to each other
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 2,
    borderStyle: "dashed",
    borderRadius: 12,
  },
  itemText: {
    marginLeft: 20,
    color: "white",
    fontSize: 20,
  },
});

export default TodoItem;
