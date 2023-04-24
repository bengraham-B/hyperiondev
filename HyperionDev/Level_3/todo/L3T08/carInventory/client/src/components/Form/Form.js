import { useState } from "react"
import { useDispatch } from "react-redux"
import { refresh } from "../../store/redux"

export default function Form(){
    const dispatch = useDispatch()

    //^ Setting State Vraibales which will be used to pass data from the UI to the bbackend.
    const [make, setMake] = useState()
    const [model, setModel] = useState()
    const [owner, setOwner] = useState()
    const [address, setAddress] = useState()
    const [registration, setRegistration] = useState()



    //^ This function acts as the CREATE frunction from the CRUD operations, which will allow a use to create a car and save it to the database.
    const handleAddCar = async () => {

        const res = await fetch('/api/cars', {
            method: "POST",
            body: JSON.stringify({make: make, model: model, owner: owner, address: address, registration:registration}),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await res.json()
        console.log(json)

        
        
        //* Adding REDUX reducer to update the UI in real time when a new car is added.
        dispatch(refresh())

        //^ Clears the form after the user has submited a car and sets the value property of each input to their repsecitve state variables so they user is still able to user the input flields
        setMake("")
        setMake("")
        setModel("")
        setOwner("")
        setAddress("")
        setRegistration("")
    }
    return (
        <div id="Form">
            <div className="title-container">
                <h1> Add Car</h1>
            </div>

            <div className="input-container">
                <h3>Make</h3>
                <input type="text" value={make} onChange={(e) => setMake(e.target.value)}/>
            </div>
            <div className="input-container">
                <h3>Model</h3>
                <input type="text"  value={model} onChange={(e) => setModel(e.target.value)}/>
            </div>
            <div className="input-container">
                <h3>Owner</h3>
                <input type="text"  value={owner} onChange={(e) => setOwner(e.target.value)} />
            </div>
            <div className="input-container">
                <h3>Address</h3>
                <input type="text"   value={address} onChange={(e) => setAddress(e.target.value)}/>
            </div>
            <div className="input-container">
                <h3>Registration</h3>
                <input type="text"  value={registration} onChange={(e) => setRegistration(e.target.value)}/>
            </div>
          

            <div className="button-container">
                <button type="submit" onClick={handleAddCar}>Add Car</button>
            </div>
        </div>
    )
}