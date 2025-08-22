// to find square
//http://localhost:4200/?n1=7


const http = require('http')
const PORT = 4200

function isPrime(n) {
    let prime = true
    for (let i = 2; i < n; i++) {
        console.log("checking", i)

        //9
        if (n % i == 0) {

            prime = false
            console.log("if", i)
            break
        }
    }
    return prime
}

const server = http.createServer((req, res) => {
    // console.log(req.url)
    const n = parseInt(req.url.split('=')[1])
    // console.log(n)

    // const n = parseInt(url.split('=')[1])
    // console.log(n)


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

