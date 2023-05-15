const express = require('express')
const fs = require('fs')
const webProjects = require('./data.json')

const app = express()
app.use(express.json())

const PORT = 8080

app.get("/api", (req, res) => { //* ===================================================================== GET
    res.send(webProjects)
})

app.post('/api', (req, res) => { //todo ===================================================================== POST
    const id_random = Math.floor(Math.random() * 1000) //? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random : Info mon the Math.random function
    const newWebProject = req.body;
    console.log(newWebProject)
    const { title, description, URL} = req.body;
    webProjects.push({id: id_random, title, description, URL});
    res.status(201).json(webProjects);

});
  

app.delete('/api', (req, res) => { //todo ===================================================================== DELETE
	const id = req.body.id //^ Retrives the id 

    console.log(id)
    if(webProjects.find(e => e.id === id)){ //^ Looks through the array if the title exists
        //^ finds the index of the id in the webProjects array.
        const projectDelete = webProjects.map((item) => item.id).indexOf(id) //? https://stackoverflow.com/questions/8668174/indexof-method-in-an-object-array : Information on usinf the map function and indedOf function.
        res.status(201).json(webProjects[projectDelete]) //^ sends the element which is to be deleted.
        console.log(projects) //^ prints out the remaining projects
    }
    else {
        res.status(404).json("NOT FOUND")
    }

})


app.put('/api', (req, res) => { //todo ===================================================================== PUT
	const update_id = req.body.update_id
    const updateTitle = req.body.update_title
    const updateDescription = req.body.update_description

    const updateProject = webProjects.find(e => e.id === update_id)
    const updatedProject = {
        id: update_id,
        title: updateTitle,
        description: updateDescription,
    }

    console.log(updateProject.title)
    res.status(201).json(updatedProject)
})


app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})