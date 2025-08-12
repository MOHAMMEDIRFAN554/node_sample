// to find all prime numbers till a max number
// Example: http://localhost:4200/?max=20

const http = require('http');
const PORT = 4200;

function isPrime(n) {
    if (n < 2) return false; // 0 and 1 are not prime
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function getPrimesTill(max) {
    let primes = [];
    for (let i = 2; i <= max; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

const server = http.createServer((req, res) => {
    if (!req.url.includes('?')) {
        return res.end("Error number not provided");
    }

    const url = req.url.split("?")[1];
    const max = parseInt(url.split('=')[1]);

    if (isNaN(max) || max < 2) {
        return res.end("Invalid number. Must be greater than 1.");
    }

    let primes = getPrimesTill(max);
    res.end(`Prime numbers till ${max} : ${primes.join(", ")}`);
});

server.listen(PORT, function (err) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("The server started successfully");
    }
});
