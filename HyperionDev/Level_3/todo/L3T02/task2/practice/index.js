const fs = require("fs/promises")
const express = require("express")
const cors = require("cors")
const _ = require("lodash") //^ Used to retirve a random item from an array on line 13, 14 and 15.
const {v4: uuid} = require("uuid") //^ Used to make a comment id on line 31.

const app  = express()

app.use(express.json())

//^ Defining a new route
//^ req: contains information getting set to the server, relates to the reqesut sent through.
//^ res: everytinh the server sends back to the API client.
app.get("/outfit", (req, res) => {
    const tops = ["Black", "White", "Orange", "Navy"]
    const jeans = ["Grey", "Dark Grey", "Black", "Navy"]
    const shoes = ["white", " Grey", "Black"]

    //^ Will send back as a JSON string 
    res.json(
        {
            top: _.sample(tops),
            jeans: _.sample(jeans),
            shoes: _.sample(shoes)
        }
    )

})


//^ Defing a POST endpoint
app.post("/comments", (req, res) =>{
    const id = uuid()
    const content = req.body.content

    if(!content) {
        return res.sendStatus(400)
    }

    // console.log(content)
    res.sendStatus(201)
})




app.listen(3000, () => console.log("API Server is running..."))

//19:38