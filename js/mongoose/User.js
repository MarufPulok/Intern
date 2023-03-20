const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    age: Number
})

//User is a collection
module.exports = mongoose.model('User', userSchema)