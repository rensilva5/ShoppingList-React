import React, { useState } from "react";
import { TextInput, View, StyleSheet, Button } from "react-native";

const AddTodo = ({submitHandler}) => {
    const [text, setText] = useState('')

    const changeHandler = (val) => {
        setText(val)
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="new item..."
                onChangeText={changeHandler}
            />
            <View style={styles.addTodo}>
                <Button styles={styles.button}
                    onPress={() => submitHandler(text)}
                    title='Add Todo'
                    color='black'
                    fontSize='30'
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1.5,
        borderBottonColor: '#ddd'
    },
    button: {
        // backgroundColor: 'coral',
        // fontSize: 37,
    },
    addTodo: {
        backgroundColor: 'coral'
    }
})
 
export default AddTodo;