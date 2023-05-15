const express = require('express')
const jwt = require('jsonwebtoken')


const app = express()

//^ Setting up middle ware
app.use(express.json())

//* Link to POSTMAN account where I tested the API
//* https://www.postman.com/dark-astronaut-547911/workspace/hyperiondev-level-3/request/26299671-2ee5437a-5dd1-43ff-86bf-5ce74f28bb0e

//^ The users
const users = [
    {name: "Mazvita", permissions: "a"},
    {name: "Meagan", permissions: ["a", "b"]},
    {name: "Kabelo", permissions: ["b", "c"]}
]

//^ Login endpoint which will create the jwt token
app.get('/login', (req, res) => {
    const username = req.body.username

    if(users.find(e => e.name === username)){ //? https://stackoverflow.com/questions/8217419/how-to-determine-if-javascript-array-contains-an-object-with-an-attribute-that-e : Infomration regarding how to use the find function
        console.log(username)

        //^ Find the index of the user who logged in in the users array.
        const index = users.map(e => e.name).indexOf(username);
       
        //^ gets the permissions of the user
        const permissions = users[index].permissions

        //& Generates the JWT
        const payload = {
            "name": username,
            "permissons": permissions
        }
        const token = jwt.sign(JSON.stringify(payload), 'jwt-area-f1-secret', {algorithm: 'HS256'})

        res.status(201).json({token})
    }
    else {
        res.status(404).json({msg:"User not found"})
    }

})

app.post('/a', (req, res) => {
    const auth = req.headers['authorization']
    const token = auth.split(' ')[1]

    try {
        const decoded = jwt.verify(token, 'jwt-area-f1-secret')
        const permission = decoded["permissons"] //^ retives the permssions from the JWT
        

        //^ Checks the permssions
        if(permission === "a"){
            res.status(200).send("Have the required permission" + " - " + decoded["name"]) //^ Response if they have the correct permssions
        }
        else{
            res.status(403).send("Do not have the required permission" + " - " + decoded["name"]) //^ Response if they do not have the correct permssions
        }
        
    }catch (err){
        res.status(400).json({err: err.message}) //^ if the request is unsuccessful
    }
})

app.post('/b', (req, res) => {
    const auth = req.headers['authorization']
    const token = auth.split(' ')[1]

    try {
        const decoded = jwt.verify(token, 'jwt-area-f1-secret')
        const permission = decoded["permissons"] //^ retives the permssions from the JWT
    
        if(permission.includes("b")){
            res.status(200).json("Have the required permission" + " - " + decoded["name"]) //^ Response if they have the correct permssions
        }
        else{
            res.status(403).send("Do not have the required permission" + " - " +decoded["name"]) //^ Response if they do not have the correct permssions
        }

    }catch (err){
        res.status(400).json({err: err.message}) //^ if the request is unsuccessful
    }
})

app.post('/c', (req, res) => {
    const auth = req.headers['authorization']
    const token = auth.split(' ')[1]

    try {
        const decoded = jwt.verify(token, 'jwt-area-f1-secret')
        const permission = decoded["permissons"] //^ retives the permssions from the JWT

        if(permission.includes("c")){
            res.status(200).json("Have the required permission" + " - " + decoded["name"]) //^ Response if they have the correct permssions
        }
        else{
            res.status(403).send("Do not have the required permission" + " - " +decoded["name"]) //^ Response if they do not have the correct permssions
        }

    }catch (err){
        res.status(400).json({err: err.message}) //^ if the request is unsuccessful
    }
})




app.listen(8080, () => {
    console.log("Listening on PORT: 8080")
})