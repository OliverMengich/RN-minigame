import { StatusBar,  } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';
export default function App() {
	const [userNumber, setUserNumber] = useState();
	const [gameIsOver, setGameIsOver] = useState(true);
	function pickedNumberHandler(selectedNumber) {
		setUserNumber(selectedNumber);
		setGameIsOver(false);
	}
	function gameOverHandler(params) {
		setGameIsOver(true);	
	}
	let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;
	if (userNumber) {
		screen = <GameScreen onGameOver={gameOverHandler} pickedNumber={userNumber}/>;
	}
	
	if (gameIsOver && userNumber) {
		screen = <GameOverScreen/>;
	}
	
	return (
		<>
			<StatusBar style="light" />
			<LinearGradient colors={[Colors.primary700,Colors.accent500]} style={styles.rootScreen}>
				<ImageBackground imageStyle={styles.backgroundImage} style={styles.rootScreen} resizeMode='cover' source={require('./assets/background.png')}>
					{/* SafeAreaView puushes down further to escape the notch */}
					<SafeAreaView style={styles.rootScreen}>
						{screen}
					</SafeAreaView>
				</ImageBackground>
			</LinearGradient>
		</>
	);
}

const styles = StyleSheet.create({
	rootScreen:{
		flex: 1,
	},
	backgroundImage:{
		opacity: 0.15,
	}
});
