function factorial(n) {
    let fact = 1;
    let i = 1;

    if (n === 0) {
        console.log(`The factorial of ${n} is: 1`);
        return;
    }

    do {
        fact = fact * i;
        i++;
    } while (i <= n);

    console.log(`The factorial of ${n} is: ${fact}`);
}

factorial(5);
factorial(10);
factorial(15);
factorial(20);
factorial(1);
factorial(0);
