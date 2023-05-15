require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

// const mongodbConnection = "mongodb+srv://one:root@cluster0.fdk9aam.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(process.env.DATABASE_URL, {
    dbName: "subscribers"
})

const db = mongoose.connection
db.on('error', (err) => console.error(err))
db.once('open', ()=> console.log("Connected to database"))

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)


app.listen(3000, () => console.log('server has started on PORT:3000'))