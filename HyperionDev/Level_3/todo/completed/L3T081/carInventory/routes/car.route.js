const express = require("express")

//^ Importing functions from the controller folder.
const {getAllCars, carsOlderThenFiveYears, createCar, deleteCar, updateManyCars, updateCar} = require('../controllers/car.controller.js')

const router = express.Router()

//* Get All Cars
router.get('/', getAllCars)

//! Get cars older then five years
router.get('/fiveyears', carsOlderThenFiveYears)

//*Create Car
router.post('/', createCar)

//*Delete Car
router.delete('/:id', deleteCar)

//! Update Many Cars
router.put('/updatemany', updateManyCars)

//* Update a car
router.put('/:id', updateCar)


module.exports = router

