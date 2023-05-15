const mongoose = require("mongoose")

//~ Importing the Schema
const User = require("./User")

//* COnnecting to mongoDB on localhost
mongoose.connect("mongodb://localhost/testdb")

async function run(){
    

    try {
        const user = await User.create(
            {
                name: "Brent", 
                age: 26,
                email: "Test@tEst.Com",
                hobby: ["Weight Lifting", "Bowling"],
                address:{
                    street: "Main Str"
                }
            }
        )
        await user.save()
        
        console.log(user)

    }catch(e) {
        console.log(e.message)

    }
}
run()

