function averageOfArray(arr) {
    if (arr.length === 0) {
        console.log("Array is empty");
        return;
    }

    let total = 0;
    for (let num of arr) {
        total += num;
    }

    let average = total / arr.length;
    console.log(`Average: ${average.toFixed(2)}`);
}
let numbers = [10, 20, 30, 40, 50];
let num = [];

averageOfArray(numbers);  
averageOfArray(num);
