import React, {useState} from 'react'
import { Text, View, TextInput, StyleSheet, Button } from 'react-native'

export default function GoalInput(props) {
	const [enteredGoalText, setEnteredGoalText] = useState('')

	function goalInputHandler(enteredGoalText){
		setEnteredGoalText(enteredGoalText)
		
	}
	
	function addGoalHandler(){
		props.onAddGoal(enteredGoalText)
		setEnteredGoalText("")

	}

	return (
		<View style={styles.inputContainer}>
			<TextInput 
				placeholder='Your Course Goal' 
				style={styles.input} 
				onChangeText={goalInputHandler}
				value={enteredGoalText}
			/>

			<Button title="Add Goal" onPress={addGoalHandler}/>
		</View>
	)
}

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: "center",
		justifyContent: "space-around",
		width: '100%',
		height: 30

	},
	input: {
		borderWidth: 1,
		padding: 8,
		width: '70%'
	}
})
