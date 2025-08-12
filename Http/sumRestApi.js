const http = require('http')
const funct = require('./functions')
const PORT = 3000
const server = http.createServer(function (req, res) {
    const string = req.url.split('?')[1]
    const parts = string.split('&')
    num1 = parseInt(parts[0].split('=')[1])
    num2 = parseInt(parts[1].split('=')[1])
    result = funct.sum(num1, num2)
    res.end(`Sum of ${num1} and ${num2} is ${result}`)
})
server.listen(PORT, function (err) {
    if (err) {
        console.log("error ", err)
    }
    else {
        console.log("Server started successfully")
    }
})