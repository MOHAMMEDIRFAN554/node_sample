// task 4 DAY 1

function isPrime(num) {
    if (num <= 1) {
        return false;
    } else if (num === 2) {
        return true;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
function maxPrime(n) {
    let prime = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            prime.push(i);
        }
    }
    console.log(`Prime numbers up to ${n}:`, prime);
}


maxPrime(100);
