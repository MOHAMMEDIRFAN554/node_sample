function sum(a, b) {
    return a + b;
}
//num1 = 30
//num1 = n
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function isOddOrEven(n) {
    return (n % 2 === 0) ? "even" : "odd";
}

function factorial(n) {
    if (n < 0) return null; // no factorial for negative numbers
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

function average(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    let total = 0;
    for (let num of arr) {
        total += num;
    }
    return total / arr.length;
}

module.exports = { sum, isPrime, isOddOrEven, factorial, average };
