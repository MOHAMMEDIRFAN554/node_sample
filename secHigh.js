// Write a function in JavaScript that finds the second highest number in an array of numbers.

function secHigh(arr) {
    if (arr.length < 2) {
        console.log(`Array: [${arr}]`);
        console.log("Not enough elements in array");
        return;
    }

    let highest = -Infinity;
    let secondHighest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        if (num > highest) {
            secondHighest = highest;
            highest = num;
        } else if (num > secondHighest && num < highest) {
            secondHighest = num;
        }
    }

    console.log(`Array: [${arr}]`);
    if (secondHighest === -Infinity) {
        console.log("No value found");
    } else {
        console.log(`Second highest number is: ${secondHighest}`);
    }
}

secHigh([10, 20, 30, 40, 50]);
secHigh([5, 5, 5, 5]);
secHigh([100]);
secHigh([3, 1, 4, 2]);
secHigh([-10, -20, -30, -5]);
