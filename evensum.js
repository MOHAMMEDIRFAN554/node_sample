// task 1 DAY 1
 
function even(num) {
    // let sum = 0;
    if (num % 2 === 0) {
        // console.log(`${num} is Even`);
        return true
    } else {
        // console.log(`${num} is Odd`);
        return false
    }
    // sum += 0;
    // console.log(` sum of ${n} even number is ${sum}`)
}
function sumeven(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        if(even(i)){
            sum += i;
        }
    }
    console.log(`sum of ${n} even numbers is ${sum}`)
    
}




sumeven(5);
sumeven(10);
sumeven(15);
sumeven(20);
sumeven(100);
sumeven(1);

