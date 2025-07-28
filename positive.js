//Write a function in JavaScript that takes an array of numbers and returns the sum of all positive numbers in the array
function positiveSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    console.log(`Array: [${arr}]`);
    console.log(`Sum of positive numbers: ${sum}`);
}






positiveSum([1, -2, 3, 4, -5]);
positiveSum([-10, -20, 5, 15]);
positiveSum([0, 0, 0]);
positiveSum([100, 200, 300]);
positiveSum([]);
