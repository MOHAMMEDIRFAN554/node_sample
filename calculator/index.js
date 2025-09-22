const express = require('express')
const app = express()
const PORT = 4500

app.use(express.json())
//add
app.post('/add', (req, res) => {
    let a = req.body.a
    let b = req.body.b
    if (isNaN(a) || isNaN(b)) {
        res.send("invalid input")
    }
    let result = a + b
    res.send(`${a} + ${b} = ${result}`)
})
app.post('/sub', (req, res) => {
    let a = req.body.a
    let b = req.body.b
    if (isNaN(a) || isNaN(b)) {
        res.send("invalid input")
    }
    let result = a - b
    res.send(`${a} - ${b} = ${result}`)
})
app.post('/multi', (req, res) => {
    let a = req.body.a
    let b = req.body.b
    if (isNaN(a) || isNaN(b)) {
        res.send("invalid input")
    }

    let result = a * b
    res.send(`${a} x ${b} = ${result}`)
})
app.post('/div', (req, res) => {
    let a = req.body.a
    let b = req.body.b
    if (isNaN(a) || isNaN(b)) {
        res.send("invalid input")
    }
    let result = a / b
    res.send(`${a} ÷ ${b} = ${result}`)
})
app.listen(PORT, (err) => {
    if (err) {
        console.log("Error", err)
    }
    else {
        console.log(`server started at http://localhost:${PORT}`)
    }
})