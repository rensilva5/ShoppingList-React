import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>FAMILY SHOOPING LIST</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: "#327da8",
    borderRadius: 10,
    marginTop: 20,
    paddingTop: 25,
  },
  title: {
    textAlign: "center",
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    padding: 3,
  },
});

export default Header;
