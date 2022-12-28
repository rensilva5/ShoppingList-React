import React from "react";
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

const TodoItem = ({ item, deleteHandler }) => {
    return (
        <TouchableOpacity onPress={() => deleteHandler(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 2,
        borderStyle: 'dashed',
        borderRadius: 12,
    }
})
 
export default TodoItem;