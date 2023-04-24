// import express from 'express'
const express = require('express')
const fs = require('fs')

const app = express()
app.use(express.json())


app.get("/get", (req, res) => {
    const webProjects = fs.readFileSync('./data.json', 'utf-8')
    console.log("GET")
    res.send(JSON.parse(webProjects))

})

app.post("/post", (req, res) => {
    const webProjects = fs.readFileSync('./data.json', 'utf-8')
    let ARRAY = JSON.parse(webProjects)
    console.log("Length:", ARRAY.length)

    let project = req.body

    ARRAY.push(project)
    fs.writeFileSync('./data.json', JSON.stringify(ARRAY))
    return res.status(201).json(ARRAY);
})

app.delete("/delete", (req, res) => {
    const webProjects = fs.readFileSync('./data.json', 'utf-8')
    let ARRAY = JSON.parse(webProjects)

    //& ARRAY -> Array in data.json

    let projectFromFrontEnd = req.body


    const indexOfItemToBeDeleted = ARRAY.indexOf(req.body)


    //* ((1)https://contactmentor.com/)
    const searchIndex = ARRAY.findIndex((project) => project.id === projectFromFrontEnd.id)
    console.log(`Found it at index: ${searchIndex}`)
    const NEW_ARRAY = ARRAY.filter((project) => {
        return project.id !== projectFromFrontEnd.id
    })
    console.log("ARRAY After FILTER: ", ARRAY)
    fs.writeFileSync('./data.json', JSON.stringify(NEW_ARRAY))
    return res.send(JSON.stringify(ARRAY))
})

app.put("/put", (req, res) => {
    let projectFromFrontEnd = req.body

    console.log(projectFromFrontEnd.title)
    
    //^ Importing the array of JS objects from  data.json file
    const webProjects = fs.readFileSync('./data.json', 'utf-8')
    let ARRAY = JSON.parse(webProjects)

    const searchIndex = ARRAY.findIndex((project) => project.id === projectFromFrontEnd.id)
    console.log(`Found it at index: ${searchIndex}`)

    // const NEW_ARRAY = ARRAY.filter((project) => {
    //     if(project.id === projectFromFrontEnd.id){
    //         project.title = projectFromFrontEnd.title
    //         project.description = projectFromFrontEnd.description
    //         project.url = projectFromFrontEnd.url

    //     }
    // })

    ARRAY[searchIndex].title = projectFromFrontEnd.title
    ARRAY[searchIndex].description = projectFromFrontEnd.description
    ARRAY[searchIndex].url = projectFromFrontEnd.url



    fs.writeFileSync('./data.json', JSON.stringify(ARRAY))


    console.table(ARRAY)






    res.send(projectFromFrontEnd.title)

})

//* https://www.javatpoint.com/expressjs-post


app.listen(5001, () =>{
    console.log("Server is running on PORT:5001")
})


/*
 * REsourses Used:
 * (1) https://contactmentor.com/find-object-in-array-of-objects/ : Information on '.findIndex' function.
 * 
 * 
 */