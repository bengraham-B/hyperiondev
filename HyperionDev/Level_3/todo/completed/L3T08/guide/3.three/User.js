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

// Method for each instance
userSchema.methods.sayHi = function() {
    console.log(`Hi, my name is ${this.name}`)
}

// Methods for teh whole Schema 
userSchema.statics.findByName = function(name){
    return this.find({name: new RegExp(name, 'i')})
}

// Methods for only a query
userSchema.query.byName = function(name){
    return this.where({name: new RegExp(name, 'i')})

}

// Virtial
// Not in the schema but based on exisintg properties which are on the schema
userSchema.virtual("namedEmail").get(function(){
    return `${this.name} <${this.email}>`
})

//Creating Middleware (express)
userSchema.pre('save', function(next){
    this.updatedAT = Date.now()
    next()

})
userSchema.post('save', function(doc, next){
    doc.sayHi()
    next()

})


module.exports = mongoose.model("User", userSchema)