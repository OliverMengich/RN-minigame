import React from "react";
import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
function Title({ children }) {
    return <Text style={styles.title}>{children}</Text>;
}
const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
        // color: "#ddb52f",
        textAlign: "center",
        borderWidth: 2,
        borderColor: '#fff',
        padding: 12,
    },
});
export default Title;
