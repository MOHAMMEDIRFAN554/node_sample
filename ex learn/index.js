const express = require('express')
let PORT = 4500
const app = express()
app.use(express.json())

let names = ["sali", "shabeeb"]


//middle part

app.get('/', (req, res) => {
    res.send(`server connected successfully`)
})

app.get('/getAllNames', (req, res) => {
    res.json(names)
})

app.post('/insertName', (req, res) => {
    let name = req.query.name
    if (!name) {
        res.send("enter proper name ")
    }
    if (names.includes(name)) {
        res.send("the name is already included in database")
    }
    else {
        names.push(name)
        res.send(`the ${name} is added to db , updated db = ${names}`)
    }
})








app.listen(PORT, (err) => {
    if (err) {
        console.log("error found ", err)
    }
    else {
        console.log(`server started at http://localhost:${PORT}`)
    }
})