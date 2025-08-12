function min(arr) {
    if (arr.length === 0) {
        console.log("Array is empty");
        return;
    }

    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    console.log(`Min is  ${min}`);
}

min([10, 20, 5, 25, 15]);
min([3, 8, 2, 1, 4]);
min([100, 99, 101, 88]);
min([-5, -1, -10, -3]);
min([50]);
min([]);
