const http = require('http');
const funct = require('./functions');
const PORT = 3000;

const server = http.createServer(function (req, res) {
    if (req.url.includes('?')) {
        const string = req.url.split('?')[1];
        const parts = string.split('&');

        let num1 = parseInt(parts[0].split('=')[1]);
        let num2 = parseInt(parts[1].split('=')[1]);

        // Sum
        let result = funct.sum(num1, num2);
        res.write(`Sum of ${num1} and ${num2} is ${result}\n`);

        // Prime check for num1
        let prime = funct.isPrime(num1);
        if (prime) {
            res.write(`${num1} is prime\n`);
        } else {
            res.write(`${num1} is not prime\n`);
        }

        // Odd or even for num1
        let oddEven = funct.isOddOrEven(num1);
        res.write(`${num1} is ${oddEven}\n`);

        // Factorial of num1
        let fact = funct.factorial(num1);
        if (fact !== null) {
            res.write(`Factorial of ${num1} is ${fact}\n`);
        } else {
            res.write(`Factorial not defined for ${num1}\n`);
        }

        // Average of array [num1, num2, result]
        let avg = funct.average([num1, num2, result]);
        if (avg !== null) {
            res.write(`Average of [${num1}, ${num2}, ${result}] is ${avg}\n`);
        } else {
            res.write(`Cannot calculate average\n`);
        }
    } else {
        res.write("Please provide num1 and num2 in the query string, e.g., /?num1=5&num2=7");
    }

    res.end();
});

server.listen(PORT, function (err) {
    if (err) {
        console.log("error ", err);
    } else {
        console.log("Server started successfully");
    }
});
