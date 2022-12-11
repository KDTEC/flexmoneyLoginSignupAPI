const mongoose = require('mongoose');
const schema = mongoose.Schema;


// MODEL for the database

const userSchema = new schema({
    name: String,
    email: String,
    password: String
})

module.exports = mongoose.model("User", userSchema)