import express from 'express'

const app = express()

app.use(express.json())


const PORT = 8080
const webProjects = 
    [
        {"id": 1, "title": "React Game!", "description": "Tic tac toe game created using Create React app.", "URL": "http://heroku/myapp/game/" }, 
        {"id": 2, "title":"Online store", "description": "Online store created with HTML, CSS and JavaScript.", "URL": "https://git.com/myrepos/shop/index"}
    ]



app.get("/api", (req, res) => { //^ ===================================================================== GET
    res.send(webProjects)
})

app.post('/api', (req, res) => { //^ ===================================================================== POST
    const newWebProject = req.body;
    webProjects.push(newWebProject);
    res.status(201).json(newWebProject);
  });
  

//^ Used to make a PUT request
//   {
//     "id": 4,
//     "title": "New Web Project",
//     "description": "This is a new web project",
//     "URL": "https://newproject.com"
// }

app.delete('/api', (req, res) => { //^ ===================================================================== DELETE

	const deleteWebProjectIndex = req.body.content 
	webProjects.splice(deleteWebProjectIndex, 1)
	res.send(200)
	console.log(webProjects)
})


//^ Deletes index 1 of the webProjects array
// {
//     "content":1
// }


app.put('/api', (req, res) => { //^ ===================================================================== PUT
	const updateIndex = req.body.id
	webProjects[updateIndex].title = req.body.newValue
	webProjects[updateIndex].description = req.body.newDesc
	console.log(webProjects)
})
//^ Used to make a PUT request.
// {
//     "id": 1,
//    "newValue": "GOOSE",
//    "newDesc": "New Desc"
// }

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})