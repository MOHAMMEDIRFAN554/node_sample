    const express = require('express')
    const mongoose = require('mongoose')
    const app = express()
    const userRoutes = require('./routes/userRoutes')

    const PORT = 4500
    app.use(express.json())

    mongoose.connect('mongodb://localhost:27017/TestDB').then(() => {
        console.log("connected to db")
        app.listen(PORT, (err) => {
            if (err) {
                console.log("error found", err)
            }
            else {
                console.log(`server is running at http://localhost:${PORT}`)
            }
        })
    }).catch((err) => {
        console.log("error found", err)
    })

    app.use('/user',userRoutes)