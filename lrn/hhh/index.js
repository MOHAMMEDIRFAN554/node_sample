const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')
const app = express()
app.use(express.json())
const PORT = process.env.PORT



//mongoosee

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("db connected successfully"))
    .catch((err) => console.log("error occured ", err))

// rotues
app.use('/auth', authRoutes)
app.use('/user', userRoutes)







app.listen(PORT, (err) => {
    if (err) {
        console.log("error found", err)
    }
    else {
        console.log(`server started at http://localhost:${PORT}`);

    }
})