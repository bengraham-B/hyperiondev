const express = require('express')
const fs = require('fs')
const app = express()
const port = process.env.PORT || 3004 

// base function - does nothing but greet
app.get('/greet', (req, resp)=>{
    const name = req.query.name
    if (!name){
        resp.send('Hello world')
    }else{
        resp.send('Hello, ' + name)
    }
})

// utility function - gets person data, and creates the file if it doesn't exist
function getPeople(){
    try {
        const content = fs.readFileSync('people.json')
        return JSON.parse(content)
    }catch(e){ // file non-existent
        fs.writeFileSync('people.json', '[]')
        return []
    }
}

function addPerson(name){
    const people = getPeople()
    people.push(name)
    fs.writeFileSync('people.json', JSON.stringify(people))
}

function deletePerson(name){
    const people = getPeople()
    const i = people.indexOf(name)
    people.splice(i, 1)
    fs.writeFileSync('people.json', JSON.stringify(people))
}

// create new person
app.post('/person/:name', (req, resp)=>{
    const name = req.params.name
    const people = getPeople()
    if (people.indexOf(name) > -1){
        resp.send('Person already exists')
    }else{
        addPerson(name)
        resp.send('Success')
    }
})

// check whether person exists
app.get('/person/:name', (req, resp)=>{
    const name = req.params.name
    const people = getPeople()
    if (people.indexOf(name) > -1){
        resp.send('Can confirm person exists')
    }else{
        resp.send('Person does not exist')
    }
})

// =============================================== Created a put route.
app.put('/person/', (req, res) => {
    const name = req.query.name
    const replace = req.query.replace

    const content = getPeople()

    if(content.indexOf(name)){ //^ Checks if the name the user wants to replace exists
        const index = content.indexOf(name) //^ If the name exists it stores the index of it in a const
        content[index] = replace //^ Replaces the name 
        res.status(200).json(content) //^ sends back a 200, saying that the name has beem successfully updated
    }
    else{
        res.status(404).json("Name not found")
    }

})

// delete person
app.delete('/person/:name', (req, resp) => {
    const name = req.params.name
    const people = getPeople()
    if (people.indexOf(name) > -1){
        deletePerson(name)
        resp.send('Success')
    }else{
        resp.send('Person does not exist')
    }
})

app.listen(port, ()=>console.log('Listening engaged ' + port))
