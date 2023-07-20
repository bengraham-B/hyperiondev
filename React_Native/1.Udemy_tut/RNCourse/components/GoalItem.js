import { StyleSheet, View, Text, Pressable } from "react-native";
//^ Pressable turns the component into a button

function GoalItem(props){
    return (
		<Pressable 
			onPress={props.onDeleteItem.bind(this, props.id)} 
			style={({pressed}) => pressed && styles.pressedItem}
		> 
			<View style={styles.goalItem}>
				<Text style={styles.goalText}>{props.text}</Text>
			</View>
		</Pressable>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
		margin: 8,
		padding: 8,
		borderRadius: 6, //* Only on Android
		backgroundColor: "red",
		
	},
	pressedItem: {
		opacity: 0.5
	},
	goalText: {
		color: "white",
	}

})
