// task 2 DAY 1

function isPrime(num) {
    if (num <= 1) {
        console.log(`${num} is not a Prime Number`);
        return;
    }
    else if (num == 2){
        console.log(`${num} is a Prime Number`);
        return;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            console.log(`${num} is not a Prime Number`);
            return;
        }
        else{
            console.log(`${num} is a Prime Number`);
            return;
        }
    }
}
isPrime(2);    
isPrime(9);    
isPrime(17);   
isPrime(100);  
isPrime(1);   
isPrime(6);

