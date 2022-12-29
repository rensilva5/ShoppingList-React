import React from "react";
import { StyleSheet, View, Text } from "react-native";


const Sandbox = () => {
    return (
        // <Text>Sandbox</Text>
        <View style={styles.container}>
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>two</Text>
            <Text style={styles.boxThree}>three</Text>
            <Text style={styles.boxFour}>four</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1, // 1 means to take all content flexible all the way space available
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        paddingTop: 60,
        backgroundColor: '#ddd',
    },
    boxOne: {
        flex: 1,
        backgroundColor: 'violet',
        padding: 10,
    },
    boxTwo: {
        flex: 1,
        backgroundColor: 'coral',
        padding: 20,
    },
    boxThree: {
        flex: 1,
        backgroundColor: 'green',
        padding: 30,
    },
    boxFour: {
        flex: 1,
        backgroundColor: 'yellow',
        padding: 40,
    }
})
 
export default Sandbox;