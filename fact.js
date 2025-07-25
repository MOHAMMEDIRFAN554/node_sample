function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }
    console.log(`The factorial of ${n} is: ${fact}`);
}

factorial(5);
factorial(10);
factorial(15);
factorial(20);
factorial(1);
factorial(0); 
