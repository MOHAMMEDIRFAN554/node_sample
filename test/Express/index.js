const express = require('express');
const PORT = 4000;
const app = express()

app.get('/', (req, res) => {
    res.send("server started successfully")
})

//greetings
app.get('/greet', (req, res) => {
    res.send("Hello World!!!")
})

app.get('/greetName', (req,res)=>{
    let abc = req.query.str

    res.send(`hello ${abc} , welcome to my website`)
})
//sqr
app.get('/square',(req,res)=>{
    let num = parseInt(req.query.num)
    let sqr = num * num 
    res.send(`square of ${num} is ${sqr}`)
    // res.send("square is "+ num*num)
})
//sum
app.get('/sum',(req,res)=>{
    let num1 = parseInt(req.query.num1)
    let num2 = parseInt(req.query.num2)
    let sum = num1 + num2
    res.send(`sum of ${num1} and ${num2} is ${sum}`)


})
// concatination
app.get('/welcome',(req,res)=>{
    let a = "hello"
    let b = "to website"
    let space = " "

    let fname = req.query.fname
    let lname = req.query.lname

    res.send(a+space+fname+space+lname+space+b)

})

app.listen(PORT, (err) => {
    if (err) {
        console.log("Error found", err)
    }
    else {
        console.log("The server is started successfully at port", PORT)
    }

})