//Write a JavaScript function that takes an array of numbers and returns a new array with    only the even numbers
function evenArray(arr) {
    let evenArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenArr.push(arr[i]);
        }
    }
    console.log(`input [${arr}]`);
    console.log(`Even numbers: [${evenArr}]`);
}



evenArray([1, 2, 3, 4, 5, 6]);
evenArray([10, 15, 20, 25]);
evenArray([7, 9, 11, 13]);
evenArray([0, 2, 4, 6, 8]);
evenArray([]);
