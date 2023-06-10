import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../constants/colors";
function PrimaryButton({ text, onPress }) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({ pressed }) =>
                    pressed
                        ? [styles.pressed, styles.button_Inner_container]
                        : styles.button_Inner_container
                }
                android_ripple={{ color: Colors.primary600 }}
                onPress={onPress}
            >
                <Text style={styles.buttonText}>{text}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;
const styles = StyleSheet.create({
    button_Inner_container: {
        backgroundColor: Colors.primary500,
        // padding: 16,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 4,
    },
    buttonOuterContainer: {
        // width: '100%',
        margin: 4,
        borderRadius: 28,
        overflow: "hidden",
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
    },
    pressed: {
        opacity: 0.75,
    },
});
