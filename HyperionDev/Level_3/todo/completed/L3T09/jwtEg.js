const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const app = express()
const port = 8000
app.use(bodyParser.json())


app.post('/login', (req, res) => {
   const usr = req.body.username
   const pwd = req.body.password

   if (usr==='zama' && pwd==='secret'){
        payload = {
            'name': usr,
            'admin': false
        }
        const token = jwt.sign(JSON.stringify(payload), 'jwt-secret',
            {algorithm: 'HS256'})
        res.send({'token': token})
    }else{
        res.status(403).send({'err':'Incorrect login!'})
    }
})


app.get('/resource', (req, res) => {
    const auth = req.headers['authorization']
    const token = auth.split(' ')[1]
    try {
        const decoded = jwt.verify(token, 'jwt-secret')
        res.send({'msg':
      `Hello, ${decoded.name}! Your JSON Web Token has been verified.`})
    }catch (err) {
        res.status(401).send({'err': 'Bad JWT!'})
 } })

//  app.get('/admin_resource', (req, res) => {
//     const token = req.headers['authorization'].split(' ')[1]
//     try {
//         const decoded = jwt.verify(token, 'jwt-secret')
//         if (decoded.admin){
//             res.send({'msg': 'Success!'})
//         }else{
//             res.status(403).send(
//             {'msg': 'Your JWT was verified, but you are not an admin.'})
//         }
//     }catch (e) {
//         res.sendStatus(401)
//  } })


app.listen(port, () => console.log(
   `Now listening at http://localhost:${port}`))