const http = require('http')
const PORT = 4200

const server = http.createServer((req, res) => {
    let url = req.url
    let str = url.split("?")[1]
    let num1 = parseInt(str.split("&")[0].split("=")[1])
    let num2 = parseInt(str.split("&")[1].split("=")[1])

    let sum = num1 + num2

    res.end(`Sum of ${num1} and ${num2} is ${sum}`)

    // console.log("input is ",sum)



})
server.listen(PORT, function (err) {
    if (err) {
        console.log("error", err)
    }
    else {
        console.log("server started successfully")
    }
})

