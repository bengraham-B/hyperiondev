import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { refresh } from "../../store/redux"

export default function MultiDelete(){
    const dispatch = useDispatch()

    //~ These state variables will be used to save the items the user edits.
    const [makeUpdate, setMakeUpdate] = useState() //^ gets the car make the user will like to update.
    const [newMakeValue, setNewMakeValue] = useState() //^ This is the new value that the user would like to change the slected car make to.

    //^ The onClick function to handle updating mutiple elements.
    const handleUpdateMany = () => {
        fetch(`/api/cars/updatemany?carToUpdate=${makeUpdate}&updatedDetails=${newMakeValue}`, {
            method:"PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {
                    make: makeUpdate
                }
            )

        
        }).then(response => console.log(response.json()))

        dispatch(refresh())


    }

    return (
        <div id="Multi-delete">

            <div className="title-container">
                <h1>Multiple Update</h1>
            </div>

            <div className="input-container">
                <div className="col-one">
                    <input type="text" placeholder="Change" onChange={(e) =>{setMakeUpdate(e.target.value)}}/>
                    <input type="text" placeholder="Change to" onChange={(e) =>{setNewMakeValue(e.target.value)}}/>
                </div>
            </div>

            <div className="button-container">
                <button onClick={handleUpdateMany}>Update</button>
            </div>

        </div>
    )
}