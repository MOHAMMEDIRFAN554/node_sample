// To find all prime numbers between two numbers
// Example: http://localhost:4200/?start=10&end=50

const http = require('http');
const PORT = 4200;

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function getPrimesBetween(start, end) {
    let primes = [];
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

const server = http.createServer((req, res) => {
    if (!req.url.includes('?')) {
        return res.end("Error");
    }

    const query = req.url.split("?")[1];
    const parts = query.split("&");

    let start = parseInt(parts[0].split("=")[1]);
    let end = parseInt(parts[1].split("=")[1]);

    if (isNaN(start) || isNaN(end) || start < 2 || end < 2 || start > end) {
        return res.end("Invalid range. Make sure start and end are numbers and start <= end.");
    }

    let primes = getPrimesBetween(start, end);
    res.end(`Prime numbers between ${start} and ${end}: ${primes.join(", ")}`);
});

server.listen(PORT, function (err) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("The server started successfully");
    }
});
