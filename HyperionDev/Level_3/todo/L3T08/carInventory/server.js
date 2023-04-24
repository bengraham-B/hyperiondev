require("dotenv").config()
const express = require('express')
const mongoose  =require('mongoose')

//* Importing the car route
const carRoutes = require('./routes/car.route.js')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log((req.path, req.method))
    next()
})


//* Routes
app.use('/api/cars', carRoutes)

//* Connecting to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    dbName: process.env.DATABASE_NAME //* Connecting to the CAR_INV_DB database
})
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server running at: http://localhost:${process.env.PORT}`)
        })
        console.log("Connected to MongoDB", `DATABASE: ${process.env.DATABASE_NAME}`)
    })
    .catch((error) =>{
        console.log(error)
    })


