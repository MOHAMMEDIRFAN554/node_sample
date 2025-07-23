function sumofn(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    console.log(`The sum ${n} numbers is: ${sum}`);
}

sumofn(5);
sumofn(10);
sumofn(15);
sumofn(20);
sumofn(100);
sumofn(1);

