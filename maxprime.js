// task 3 DAY 1

function isPrime(num) {
    if (num <= 1) {
        // console.log(`${num} is not a Prime Number`);

        return false;
    } else if (num === 2) {
        // console.log(`${num} is a Prime Number`);

        return true;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            // console.log(`${num} is not a Prime Number`);

            return false;
        }
    }
    // console.log(`${num} is a Prime Number`);


    return true;
}

function maxPrime(n) {
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

maxPrime(50);
