const mongoose = require("mongoose")

const addressSchema = new mongoose.Schema({
    street: String,
    city: String
})

const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min:18,
        max: 32,
        validate: {
            validator: v =>  v % 2 === 0,
            message: props => `${props.value} is not an even number`
        }
    },

    email: {
        type: String, 
        minLength: 1,
        maxLength: 32,
        required: true, 
        lowercase: true
    },

    createAt:{
        type: Date,
        immutable: true,
        default: () => Date.now()
    },

    updatedAT:{
        type: Date,
        default: () => Date.now()
    },

    bestFriend:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"

    },
    hobbies: [String],
    address: addressSchema
})


module.exports = mongoose.model("User", userSchema)