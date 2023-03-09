const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

const db = require('./config/keys').mongoURI

mongoose.connect(db).then(() => console.log('mongodb connected')).catch(err => console.log(err))

const port = process.env.PORT || 3000
app.use(express.json())

const shoppingItemsRouter = require('./routes/shoppingItems')
app.use('/shoppingItems', shoppingItemsRouter)

app.listen(port, () => console.log(`server started on port ${port}`)) 
