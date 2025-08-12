function factorial(n) {
    let fact = 1;
    let i = 1;
    while (i <= n) {
        fact = fact * i;
        i++;
    }
    console.log(`The factorial of ${n} is: ${fact}`);
}

factorial(5);
factorial(10);
factorial(15);
factorial(20);
factorial(1);
factorial(0);
