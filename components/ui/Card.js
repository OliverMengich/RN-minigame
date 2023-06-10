import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';
function Card({children}) {
    return (
        <View style={styles.card}>
            {children}
        </View>
    );
}
const styles = StyleSheet.create({
    card: {
        padding: 16,
        alignItems: "center",
        marginTop: 36,
        backgroundColor: Colors.primary800,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 6,
    },
});

export default Card;