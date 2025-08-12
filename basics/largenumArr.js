function large(arr) {
    if (arr.length === 0) {
        console.log("Array is empty");
        return;
    }
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    console.log(largest);
}

large([10, 20, 5, 25, 15]);
large([3, 8, 2, 1, 4]);
large([10.00, 9.9, 10.1, 8.8]);
large([-5, -1, -10, -3]);
large([50]);
large([-5, -1, -20, -80, 0 ,-150])
large([])
