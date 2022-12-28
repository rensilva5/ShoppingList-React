import { View, Text, StyleSheet} from "react-native";

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My todos</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: '#327da8'
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    }
})
 
export default Header;