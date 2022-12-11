const express = require('express');
const env = require('dotenv');
const mongoose = require('mongoose');
const { login, register } = require('./controller');
const cors = require('cors');
env.config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


// Connect to the database
mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGODB)
    .then(() => console.log('Connected!'))
    .catch(err => {
        console.log("Mongo connection ERROR OCCURED");
        console.log(err);
    });



//Routes
app.post("/login", login) 
app.post("/register", register) 

app.listen(9002,() => {
    console.log("BE started at port 9002")
})