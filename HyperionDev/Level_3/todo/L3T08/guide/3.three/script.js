const mongoose = require("mongoose")

//~ Importing the Schema
const User = require("./User")

//* COnnecting to mongoDB on localhost
mongoose.connect("mongodb://localhost/testdb")

async function run(){
    

    try {
        // const user = await User.deleteMany({name: "Sally", name:"Ben", name:"Kyle"})
        // const user = await User.where("name").equals("Ben").select("name")
        const user = await User.findByName("kyle")
        const user1 = await User.find().byName("Kyle") //Query Method
        const user2 = await User.findOne({name: "Kyle"}) //Virtual Method
        console.log(user2.namedEmail)


        console.log(user)
        await user.save()
        console.log(user)
        // console.log(user1)
        // user.sayHi()
      

    }catch(e) {
        console.log(e.message)
    }
}
run()

