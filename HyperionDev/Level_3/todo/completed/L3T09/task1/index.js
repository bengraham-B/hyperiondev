const express = require('express')
const jwt = require('jsonwebtoken')


const app = express()

//^ Setting up middle ware
app.use(express.json())

//* Link to POSTMAN account where I tested the API
//* https://www.postman.com/dark-astronaut-547911/workspace/hyperiondev-level-3/request/26299671-2ee5437a-5dd1-43ff-86bf-5ce74f28bb0e

app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    if(username === "goose" && password === "spaceChicken01"){
        const payload = {
            'name': username,
            'admin': true
        }

        //^ Making the JWT token
        const token = jwt.sign(JSON.stringify(payload), 'jwt-area-f1-secret', {algorithm: 'HS256'})
        res.status(200).json({'Token': token})
    }
})

app.get('/resource', (req, res) => {
    const auth = req.headers['authorization']
    const username = req.body.username
    const token = auth.split(' ')[1]

    try {
        const decoded = jwt.verify(token, 'jwt-area-f1-secret')
        
        res.status(200).json({
            msg: ` ${username}: Token verified`
        })
    }catch (err){
        res.status(400).json({err: err.message})
    }
})

app.get('/admin_resource', (req, res) => {
    const token = req.headers['authorization'].split(' ')[1]
    const decoded = jwt.verify(token, 'jwt-area-f1-secret')

    if(decoded["admin"]){
        res.status(200).json({message: "Admin access granted"})
    }
    else {

        res.status(200).json({message: "No Admin access granted"})
    }
})

app.listen(8080, () => {
    console.log("Listening on PORT: 8080")
})