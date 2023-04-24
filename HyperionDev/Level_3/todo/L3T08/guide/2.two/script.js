const mongoose = require("mongoose")

//~ Importing the Schema
const User = require("./User")

//* COnnecting to mongoDB on localhost
mongoose.connect("mongodb://localhost/testdb")

async function run(){
    

    try {
        // const user = await User.deleteMany({name: "Sally", name:"Ben", name:"Kyle"})
        // const user = await User.where("name").equals("Ben").select("name")
        const user = await User.where("name")
            .gt(12)
            .where("_id")
            .equals("6428b86c4b08289febcd041f")
            .populate("bestFriend")
            .limit(1)
            // .select("age")
            // user[0].bestFriend ="6428b86c4b08289febcd041f"
            // await user[0].save()


        console.log(user)
      

    }catch(e) {
        console.log(e.message)
    }
}
run()

