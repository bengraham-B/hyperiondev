const mongoose = require('mongoose')

//* Importing the Car Schema model
const Car = require("../models/car.model.js")

//* Get all cars 
const getAllCars = async (req, res) => {
    const cars = await Car.find({})
    res.status(200).json({cars})
}

//* Get cars older then five years
const carsOlderThenFiveYears = async (req, res) => {
    const currentYear = new Date().getFullYear()
    let olderThenFiveYears = currentYear - 5
    const cars = await Car.find({model: {$lt: olderThenFiveYears}})
    res.status(200).json({cars})
}


//* Creating a new car (POST) 
const createCar = async (req, res) => {
    try{
        const car = await Car.create({
            make: req.body.make,
            model: req.body.model,
            owner: req.body.owner,
            registration: req.body.registration,
            address: req.body.address
        })
        console.log(Car, "Created")
        res.status(200).json(car)
    } catch(err) {
        console.log(Car, "Not Created")
        res.status(400).json({error: err.message})
    }
}



//? (1) www.youtube.com

//* Delete a car 
const deleteCar = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Car does not exist in Single Delete"})
    }

    const car = await Car.findOneAndDelete({_id: id})

    if(!car){
        res.status(404).json({error: "Car does not exist"})
    }

    res.status(200).json(car)   
}

//! Updating Many Cars
const updateManyCars = async (req, res) => {
    const carToUpdate = req.query.carToUpdate //^ The cars the user would like to update
    const updatedDetails = req.query.updatedDetails //^ The value the user would like to update to
    console.log(carToUpdate, updatedDetails)

    const updateManyCars = await Car.find({make: carToUpdate}).updateMany({make:updatedDetails })
    res.status(200).json({carToUpdate, updatedDetails})
}

//* Updating a car
const updateCar = async (req, res) =>{
    const {id} = req.params
    const make = req.params
    console.log("From controller", make)

    //^ Check if the ID the user passed to the backend is valid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "Car is not valid"})
    }

    const car = await Car.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!car){
        res.status(400).json({error: "Car is not valid"})
    }

    res.status(200).json(car)
}






//* Exporting the function
module.exports = {getAllCars, carsOlderThenFiveYears, createCar, deleteCar, updateManyCars, updateCar}



/*
 * Resounrces Used:
 * (1) https://www.youtube.com/watch?v=Ll6knx7sFis&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=3 : Information regardng making routes to carry out CRUD operations.
 */