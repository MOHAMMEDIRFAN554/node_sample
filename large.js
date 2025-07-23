greatest(5,5,7);
greatest(53,15,47);


function greatest(num1, num2, num3) {
    if (num1 < num2){
    if (num2 < num3) {
        console.log(num3)
    } else {
        console.log(num2)
    }
}
else{
    console.log(num1)
}
}