import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { refresh } from '../../store/todo'



export default function AddTodo() {

	const dispatch = useDispatch()

	//^ Setting State variables
	const [addTodo, setAddTodo] = useState()

	
	const handleAddTodo = async (req, res) => {
		dispatch(refresh())
		const postToso = await fetch(`/api/todos?details=${addTodo}`, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			}
			
		})
		dispatch(refresh())

		res.status(200).json(postToso)



	}
	return (
		<div id="AddTodo">
			<div className="container">
				<div className="input-container" >
					<input type="text" onChange={(e) => setAddTodo(e.target.value)}/>
				</div>
				<div className="button-container">
					<button onClick={handleAddTodo}>Add Todo</button>
				</div>
			</div>
		</div>
	)
}
