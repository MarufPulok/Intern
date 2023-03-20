const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    hobbies: [String],
    address: {
        street: String,
        city: String,
        houseNo: Number
    },
    bestFriend: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

//User is a collection
module.exports = mongoose.model('User', userSchema)