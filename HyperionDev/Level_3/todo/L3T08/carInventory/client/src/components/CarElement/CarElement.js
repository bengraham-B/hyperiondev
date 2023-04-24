import React, { useState } from 'react'
import {useDispatch } from 'react-redux'
import {refresh} from '../../store/redux'


//^ Importing the handleDelete function.
import deleteCRUD from './deleteFunction'

//^ Importing the PUT function.

export default function CarElement(props) {

    //* Using REDUX reducer
    const dispatch = useDispatch()

    //^ State Variable
    const [edit, setEdit] = useState() //? The edit state varaible will be used to toggle between showing the data in the elements and the inputs which the user will be able edit information. 

    //~ These state variables will be used to save the items the user edits.
    const [makeUpdate, setMakeUpdate] = useState()
    const [modelUpdate, setModelUpdate] = useState()
    const [ownerUpdate, setOwnerUpdate] = useState()
    const [addressUpdate, setAddressUpdate] = useState()
    const [registrationUpdate, setRegistrationUpdate] = useState()



    //~ This is the function in the edit(update) button which will handle the edit opertion of CRUD.
    const handleEdit = () => {
        setEdit(true) //~ Sets the elements to display the inputs.
    }

    //~ If the use cancels out of the edit the element will be set to its default.
    const cancelEdit = () => {
        setEdit(false) //~ Sets the elements to default, displaying data.
    }
  
    //~ Once the handle save function has been run the PUT request will be made.
    const handleSave = async (carId) =>{
        fetch(`/api/cars/${carId}`, {
            method:"PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {
                    make: makeUpdate,
                    model: modelUpdate,
                    owner: ownerUpdate,
                    address: addressUpdate,
                    registration: registrationUpdate
                }
            )
        
        }).then(response => console.log(response.json()))
        setEdit(false) //~ Setting the element back to its default.

        //* Calling the Redux refresh reducer to update the UI in real time
        dispatch(refresh())
    }


    //! Calling the Delete CRUD function

    const handleDelete = (id) =>{
        deleteCRUD(id)
        dispatch(refresh()) //* Calling the REDUX 'refresh' function to update UI in real time.
    }

  return (
    <div id='CarElement'>

        <div className="details-container">
            <div className="left">
                <div className='make'>
                {edit ? <input placeholder={"Make: " + props.make} onChange={(e) => setMakeUpdate(e.target.value)}/> : props.make}

                    <div className="model">
                        {edit ? <input placeholder={"Model: " + props.model} onChange={(e) => setModelUpdate(e.target.value)}/> : props.model}
                    </div>
                </div>
            </div>

            <div className="center">

                <div className="owner-details">
                    <div className="owner">
                        {edit ? <input placeholder={"Owner: " + props.owner} onChange={(e) => e.target.value !== undefined ?   setOwnerUpdate(e.target.value) : setOwnerUpdate(props.owner)}/> : props.owner}
                    </div>

                    <div className="address">
                        {edit ? <input placeholder={"Address: " + props.address} onChange={(e) => setAddressUpdate(e.target.value)}/> : props.address}

                    </div>
                </div>

                <div className="registration-wrapper">

                    <div className="registration">
                        {edit ? <input placeholder={"Reg.: " + props.registration} onChange={(e) => setRegistrationUpdate(e.target.value)}/> : props.registration}
                    </div>
                </div>



            </div>

            <div className="right">

                {edit ?  
                <div>
                    <button onClick={cancelEdit}>Cancel</button>
                    <button onClick={() => handleSave(props.id)}>Save</button>

                </div>
                : 
                <div>

                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={() => handleDelete(props.id)}>Delete</button>
                </div>
                }
               

            </div>



        </div>
    </div>
  )
}
