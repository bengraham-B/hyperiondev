require("dotenv").config()
const mongoose = require("mongoose")

const Schema = mongoose.Schema

//* Creating the Schema for the TODOS
const TodoSchema = new Schema({
    details: {
        type: String, 
        required: true
    },
    completed: {
        type: Boolean, 
        default: false
    } //^ Setting the default to false for all todos as when the user adds them, the todo has not yet been completed.
}, { timestamps: true }) //?((1)geeksforgeeks.org)

//^ "TODO_SCHEMA" -> Used capital letters and an underscore oppsed to camel casing as I want this vairable to stand out.
module.exports = mongoose.model("todos_collection", TodoSchema)

/*
 * Resources Used:
 * (1) https://www.geeksforgeeks.org/mongoose-timestamps/ : Information regarding timestamps in mongoose
 */
