const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const app = express()
const PORT = 8080

app.use(bodyParser.json())

app.post('/login', (req, res) => {
    const username = req.body.username
    const pwd = req.body.password

    if (username === 'zama' && pwd ==='secret'){
       payload = {
        'name': username,
        'admin': false
       }

       const token = jwt.sign(JSON.stringify(payload), 'jwt-secret', {algorithm: 'HS256'})
       res.send({'token': token})
    }else{
        res.status(403).send({'err':'Incorrect login!'})
    }
})

app.get('/resource', (req, res) => {
    const auth = req.headers['authorization']
    const token = auth.split(' ')[1]
    console.log( auth)

    try {
        const decoded = jwt.verify(token, 'jwt-secret')
        res.send({'msg': `Hello, ${decoded.name}! Your JSON Web Token has been verified.`})
    } catch (error) {
        res.status(401).send({'err': 'Bad JWT'})
    }
})


app.listen(PORT, () => console.log(
    `Now listening at http://localhost:${PORT}`))