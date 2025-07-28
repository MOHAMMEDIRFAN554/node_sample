function fib(n) {
    let a = 0, b = 1;
    let arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(a);
        let next = a + b;
        a = b;
        b = next;
    }

    console.log(`Fibonacci sequence up to ${n} terms: [${arr.join(", ")}]`);
}

fib(5);
fib(10);
fib(1);
fib(0);
fib(15);
fib(25);

