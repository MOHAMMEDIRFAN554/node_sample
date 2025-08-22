const express = require('express');
let PORT = 4500
let funct = require('./functions')
const app = express();
app.use(express.json())
app.get('/', (req, res) => {
    res.send('check \n /square?n=5 \n /palindrome?str=hello  \n /sum?num1=2&num2=5 \n /greet?fname=FNAME&lname=LNAME');
});
app.get('/square', (req, res) => {
    let num = req.query.n
    if (isNaN(num)) {
        res.send(`${num} is not a number , please send a number`)
    }
    else {
        let num = parseInt(req.query.n)

        let sqr = num * num
        res.send(`square of number ${num} is ${sqr}`)
    }
})
app.get('/palindrome', (req, res) => {

    let str = req.query.str

    let pali = funct.palindrome(str)

    res.send(pali);
});
app.get('/sum', (req, res) => {
    let num1 = parseInt(req.query.num1)
    let num2 = parseInt(req.query.num2)
    let sum = num1 + num2
    res.send(`sum of ${num1} and ${num2} = ${sum}`)
})
app.get('/greet', (req, res) => {
    let fname = req.query.fnamee
    let lname = req.query.lname
    res.send("Hello " + fname + " " + lname)
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 