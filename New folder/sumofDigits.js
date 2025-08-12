const http = require('http')
const sumDigits = require('sum-of-digits').default


let PORT = 3100;
let sum = sumDigits(589);
console.log(sumDigits)
const server = http.createServer(function (req, res) {
    res.end("Sum = " + sum)
})


server.listen(PORT, function (err) {
    if (err) {
        console.log("error", err)
    }
    else {
        console.log("server started successfully")

    }
})