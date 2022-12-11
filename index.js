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

mongoose.connect('mongodb+srv://god:admin@cluster0.dawwfyz.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Connected!'))
    .catch(err => {
        console.log("Mongo connection ERROR OCCURED");
        console.log(err);
    });



//Routes
app.post("/login", login) 
app.post("/register", register) 

app.listen(3000,() => {
    console.log("Started at port 3000")
})