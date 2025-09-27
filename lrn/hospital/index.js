const express = require('express')
const mongoose = require("mongoose")
require('dotenv').config()
const authRoutes = require('./routes/authRoutes')

const PORT = process.env.PORT
const app = express()
app.use(express.json())




mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("server connected successfully"))
    .catch((err) => console.log("Error occured", err))




app.use('/auth', authRoutes);


app.listen(PORT, (err) => {
    if (err) {
        console.log('error found', err)
    }
    else {
        console.log(`server started at http://localhost:${PORT}`)
    }
})