import React from 'react'


export default function AddCar() {
  return (
    <div className="form-container">

        <div className="input-field-container">
            <h3>Make</h3>
            <input type="text" />
        </div>

        <div className="input-field-container">
            <h3>Model</h3>
            <input type="text" />
        </div>

        <div className="input-field-container">
            <h3>Owner</h3>
            <input type="text" />
        </div>
       
        <div className="input-field-container">
            <h3>Registration</h3>
            <input type="text" />
        </div>
       
        <div className="input-field-container">
            <h3>Address</h3>
            <input type="text" />
        </div>


        <button>Add Car</button>
    </div>
  )
}
