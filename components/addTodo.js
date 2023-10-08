import React, { useState } from "react";
import { TextInput, View, StyleSheet, Button } from "react-native";

const AddTodo = ({ submitHandler }) => {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  const handleAddItem = () => {
    submitHandler(text);
    setText("");
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="New item..."
        placeholderTextColor={"white"}
        onChangeText={changeHandler}
        value={text}
        color="white"
        fontSize={22}
      />
      <View style={styles.addTodo}>
        <Button
          styles={styles.button}
          onPress={handleAddItem}
          title="ADD ITEM"
          color="black"
          fontSize="30"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1.5,
    borderBottomColor: "#ddd",
    color: "white",
    fontSize: 20,
  },
  button: {
    backgroundColor: "coral",
    fontSize: 37,
  },
  addTodo: {
    backgroundColor: "coral",
    borderRadius: 20,
  },
});

export default AddTodo;
