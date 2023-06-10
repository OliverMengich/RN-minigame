import React, { useState } from "react";
import { View, StyleSheet, TextInput, Alert, Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEnteredNumber] = useState("");
    function numberInputHandler(text) {
        setEnteredNumber(text);
    }
    function resetHandler() {
        setEnteredNumber("");
    }
    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            //show alert
            Alert.alert(
                "Invalid Number!",
                "Number has to be a number between 1 and 99.",
                [{ text: "Okay", style: "destructive", onPress: resetHandler }]
            );
            return;
        }
        console.log(chosenNumber, "Is valid");
        onPickNumber(chosenNumber);
    }
    return (
        <View style={styles.rootContainer}>
            <Title children="Guess my Number!!" />
            <Card>
                <InstructionText children='Enter a Number!' />
                <TextInput
                    onChangeText={numberInputHandler}
                    value={enteredNumber}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="number-pad"
                    maxLength={2}
                    style={styles.screen_Number_Input}
                />
                <View style={styles.buttons_container}>
                    <View style={styles.button_container}>
                        <PrimaryButton onPress={resetHandler} text="Reset" />
                    </View>
                    <View style={styles.button_container}>
                        <PrimaryButton
                            onPress={confirmInputHandler}
                            text="Confirm"
                        />
                    </View>
                </View>
            </Card>
        </View>
    );
}

export default StartGameScreen;
const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        marginTop:100,
        alignItems:'center'
    },
    screen: {
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
    instructionText:{
        color:Colors.accent500,
        fontSize: 24,
    },
    screen_Number_Input: {
        height: 50,
        fontSize: 32,
        width: 55,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: "bold",
        textAlign: "center",
    },
    buttons_container: {
        flexDirection: "row",
    },
    button_container: {
        flex: 1,
    },
});
