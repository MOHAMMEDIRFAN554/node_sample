// task 3 DAY 1

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
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}
maxPrime(100);
