import "./App.css";

import { addNewTodo, edit, deleteTodo, complete } from "./store/todo";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function App() {
  const todo = useSelector((state) => state.todo.data);
  console.log("App todo", todo);
  const dispatch = useDispatch();

  const [input, setInput] = useState();

  //? (1) codingbeautydev.com
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleInput = () => {

	dispatch(addNewTodo(input)); //^ 'input' is defined on line 12, as a state variable


  };

  const handleEdit = (id) => {
    const userEdit = prompt("Edit data");
    dispatch(edit({ task: id, userEdit }));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleComplete = (id) => {
	  
	  
	if (todo[id].completed) {
		const completedTodo = document.getElementById(id);
		completedTodo.setAttribute("class", "completed");
	} 
		
	else {
		const completedTodo = document.getElementById(id);
		completedTodo.setAttribute("class", "completedNot"); //*(2) www.javascripttutorial.net
	}
	
	dispatch(complete(id));
  };

  

  return (
    <div className="App">
      <div className="App-Form">
        <div className="Form">
          <h1>Add New Todos</h1>
          <input type="text" id="input" onChange={handleChange} />
          <button onClick={handleInput}>Add Todo</button>
        </div>
      </div>

      <div className="App-TodoOutput">
        <div className="TodoOutput">
          {console.log("App todo", todo.data)}

          {todo.map((todo, i) => {
			console.log(todo.completed)
            return (
              <div key={i} className="todo-output-div">
                <div className="todo">
                  <p id={i}>{todo.content}</p>
                  <button onClick={() => {handleEdit(i);}}>Edit</button>
                  <button onClick={() => {handleDelete(i);}}>Delete</button>
                  <button onClick={() => {handleComplete(i);}}>Completed</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

/*
 * Resources Used:
 * (1) https://codingbeautydev.com/blog/react-get-input-value-on-button-click/: Information regarding get input value in React
 * (2) https://www.javascripttutorial.net/javascript-dom/javascript-removeattribute/#:~:text=Use%20the%20removeAttribute()%20to,the%20removeAttribute()%20method%20instead: Information regarding '.removeAttribute()'
 */
