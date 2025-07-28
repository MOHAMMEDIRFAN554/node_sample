function remove(arr) {
    arr.shift();
    console.log(`updated array [${arr}]`);
}

remove([10, 20, 30, 40]);
remove([5, 15, 25]);
remove(["a", "b", "c", "d"]);
remove([100]);
remove([]);
