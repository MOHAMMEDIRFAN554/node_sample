const express = require('express');
const app = express();

app.get("/", function(req, res) {
    res.send("hii")
})

app.get("/square", (req, res)=> {
    let num = parseInt(req.query.num);
    let square = num * num;
    res.send("Sqare is "+ square)
})

app.get("/hello", (req, res)=> {
    res.send("how are you")
})

app.get("/sum", (req, res)=> {
    let num1 = parseInt(req.query.n1);
    let num2 = parseInt(req.query.n2);
    res.send("Sum = " + (num1 + num2))
})

app.get("/concat", (req, res)=> {
    let name1 = req.query.n1;
    let name2 = req.query.n2;
    res.send("concat = " + (name1 + name2))
})

app.listen(3000)