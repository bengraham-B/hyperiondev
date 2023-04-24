import React, { useState } from 'react'

//^ Importing REDUX
import { useDispatch } from 'react-redux'
import { refresh } from '../../store/todo'

export default function TodoElement(props) {
    const dispatch = useDispatch()

    //^State variables
    const [update, setUpdate] = useState(false) //^ Toogle beteewn converting the details to an input and back to the new updated details.
    const [updateValue, setUpdateValue] = useState()

    //^ using '_id' as I am working with the MongoDB assigned id.
    //^ This onClick function will be responsible for deleteing the todo when they are marked as compete
    //!Delete Todo
    const handleComplete = async (_id) => {
        console.log(_id)

        const res = await fetch(`/api/todos/${_id}`, {method: "DELETE"})
    
        const json = await res.json()
        dispatch(refresh())

        console.log(res)

    }
    
    const handleUpdate = (_id) => {
        setUpdate(true)
    }

    const handleSave = async (_id) =>{
        setUpdate(false)
        console.log(_id, updateValue)
        console.log('updateValue', updateValue)
        await fetch(`api/todos/update?id=${_id}&newDetails=${updateValue}`, {method:"PUT"})
            .then((res) => console.log(res))

        dispatch(refresh())
        
    }

  return (
    <div id="TodoElement">

        <div className="left">

            <div className="details-container">
                <h1>
                    {update ? <input onChange={(e) => {setUpdateValue(e.target.value)}}/> : <h3>{props.details}</h3>}
                </h1>
            </div>

        </div>
        <div className="right">
            <div className="button-container">
                <button onClick={() => handleComplete(props._id)}>Complete</button>
                {
                    update ? 
                        <button onClick={() => handleSave(props._id)}>Save</button> //^ Displays this button, so the user can save the update todo. will execute thr update CRUD function.
                        :
                        <button onClick={() => handleUpdate(props._id)}>Update</button>
                }
            </div>

        </div>

    </div>
  )
}
