const mongoose = require("mongoose")
const env = require('dotenv').config()

//db connection local
// mongoose.connect('mongodb://localhost/appdb')
// const db = mongoose.connection
// db.on('error', console.error.bind(console, 'connection error:'))
// db.once('open', function() {
//   console.log('db connected')
// })


//db connection online
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('db connected')
})


