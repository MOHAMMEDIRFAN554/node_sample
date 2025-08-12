// to find square
//http://localhost:4200/?n1=7


const http = require('http')
const PORT = 4200

function isPrime(n) {
    let prime = true
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            prime = false
            break   
        }
    }
    return prime
}

const server = http.createServer((req, res) => {
    const url = req.url.split("?")[1]
    const n = parseInt(url.split('=')[1])

    let prime = isPrime(n)
    if (prime) {
        res.end(`the number ${n} is prime`)
    } else {
        res.end(`the number ${n} is not prime`)
    }
})

server.listen(PORT, function (err) {
    if (err) {
        console.log("Error", err)
    } else {
        console.log("The server started successfully")
    }
})

