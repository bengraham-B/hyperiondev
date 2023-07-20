import { useState } from 'react'; //^ Import useState from the core React libary
import { StyleSheet, View, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
	const [courseGoals, setCourseGoals] = useState([])

	function goalInputHandler(entereText) {
		setEnteredGoal(entereText)

	}

	function addGoalHandler(enteredGoalText) {
		setCourseGoals(currentCourseGoals => [
			...currentCourseGoals, 
			{text: enteredGoalText, id: Math.random().toString()}
		])
	}

	//^ Function which will run when tapping on an item
	function deleteGoalHandler(id){
		setCourseGoals(currentCourseGoals => {
			return currentCourseGoals.filter((goal) => goal.id !== id)
		})
	}

	return (
		<View style={styles.appContainer}>
		  <GoalInput onAddGoal={addGoalHandler} />
		  <View style={styles.goalsContainer}>
			<FlatList
			  data={courseGoals}
			  renderItem={itemData => {
				return <GoalItem 
					key={itemData.item.id} 
					text={itemData.item.text}  
					id={itemData.item.id} //^ Passing id down of each element
					onDeleteItem={deleteGoalHandler}
				/>;
			  }}
			  keyExtractor={(item) => item.id.toString()} // Assuming `id` is a number; use `item.id` if it's a string
			/>
		  </View>
		</View>
	  );
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1, //^ This takes all availbe sapce of the screen
		paddingTop: 50,
		paddingHorizontal: 16

	},
	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: "#cccccc"
	},
	textInput:{
		borderWidth: 1,
		borderColor: "#cccccc",
		width: "70%",
		marginRight: 8,
		padding: 8
	},
	goalsContainer: {
		flex: 5,
	},
	
   
});

