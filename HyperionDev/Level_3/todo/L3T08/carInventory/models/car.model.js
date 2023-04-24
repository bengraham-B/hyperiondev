const mongoose = require("mongoose")

//* Making the Schema which will be used to store information regarding cars in MongoDB
const Schema = mongoose.Schema
const CarSchema = new Schema({
    make: {
        type: String, 
        reqiured:true
    },
    model: {
        type: Number,
        required: true,
    },
    owner: {
        type: String,
        required: true,
    },
    registration: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true
    }

}, {timestamps: true})

//* Exporting the car Schema model so that it can be used within other parts of the app.

module.exports = mongoose.model('Car', CarSchema)