import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import InstructionText from "../components/ui/InstructionText";
function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}
let minBoundary = 1;
let maxBoundary = 100;
function GameScreen({ pickedNumber, onGameOver }) {
    const initialGuess = generateRandomBetween(1, 100, pickedNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    function nextGuessHandler(direction) { //lower or higher
        if ((direction === 'lower' && currentGuess < pickedNumber) ||(direction === 'higher' && currentGuess > pickedNumber)) {
            Alert.alert('Don\'t lie!', 'You know that this is wrong...', [{ text: 'Sorry!', style: 'cancel' }]);
            return;
        }
        if (direction === 'lower') {
            console.log('lower');
            maxBoundary = currentGuess;   
        }else{
            minBoundary = currentGuess+1;
        }
        console.log(minBoundary, maxBoundary);
        const newRandNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRandNumber);
    }
    useEffect(() => {
        if (currentGuess === pickedNumber) {
            Alert.alert('Game Over!', 'You won!', [{ text: 'Okay', style: 'cancel', onPress: onGameOver }]);
            // onGameOver();
        }
    }, [currentGuess, pickedNumber, onGameOver]);
    return (
        <View style={styles.screen}>
            <Title children="Opponent's Guess:" />
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <InstructionText>
                    Higher or Lower?
                </InstructionText>
                <View>
                    <PrimaryButton onPress={()=>nextGuessHandler('lower')} text='-' />
                    <PrimaryButton onPress={()=>nextGuessHandler('higher')} text='+' />
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12,
        marginTop: 100,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    buttons_container: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 15,
    },
});
export default GameScreen;
