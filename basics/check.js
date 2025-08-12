//day2 task1 

function checkNumberInArray(arr, number) {
    let index = arr.indexOf(number);
    if (index !== -1) {
        console.log(`Yes, the number ${number} is found in array at ${index + 1} possition`);
    } else {
        console.log("No, the element is not found in the array");
    }
}

let numbers = [5, 10, 15, 20, 25];

checkNumberInArray(numbers, 15); 
checkNumberInArray(numbers, 30); 
checkNumberInArray(numbers, 20); 
checkNumberInArray(numbers, 45); 
checkNumberInArray(numbers, 5);
checkNumberInArray(numbers, 50); 



