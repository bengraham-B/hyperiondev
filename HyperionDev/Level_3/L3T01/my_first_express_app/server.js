import express from 'express'
const app = express()

import JSON from './person.json' assert {type: 'json'} //*(1) https://bobbyhadz.com
console.log(JSON.name)

app.get('/', (req, res) => {
    res.send(`Welcome ${JSON.name}`)
})

app.use(express.static('public'))

//* (3) stackoverflow.com
app.use((req, res) => {
    res.send('Sorry! Can’t find that resource. Please check your URL')
})

app.listen(3000, () => {
    console.log(3000, "PORT and PORT")
})

/*
 * Resources Used:
 * (1) https://bobbyhadz.com/blog/javascript-import-json-file: Information regarding how to import JSON files into a JS file.
 * (2) https://gist.github.com/zcaceres/2854ef613751563a3b506fabce4501fd#generalized-error-handling: Information regarding if the server could not find the requested page
 * (3) https://stackoverflow.com/questions/6528876/how-to-redirect-404-errors-to-a-page-in-expressjs: Information regraind, if the server can not find the page the user requested
 */