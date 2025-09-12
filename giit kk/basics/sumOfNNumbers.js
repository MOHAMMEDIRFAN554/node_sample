

// findSum(3)
// findSum(6)
// let result = findSum(1864)


function findSum(num) {
    console.log("trying find till  "+  num)
    let sum = 0;
    for( let i = 1 ; i <= num  ; i = i + 1 ) {
        sum = sum + i;
    }
    console.log("sum = ", sum)
    return sum
}

function isEven(num) {
    if(num%2 == 0) {
        return true
    } else {
        return false;
    }
}

findSumOfEvenNumbers(7)


function findSumOfEvenNumbers(num) {
    console.log("trying find till  "+  num)
    let sum = 0;
    for( let i = 2 ; i <= num  ; i = i + 2 ) {
        sum = sum + i;
        
    }
    console.log("sum = ", sum)
    return sum
}

// 3 = 1 +2 + 3
// 4 = 1 + 2 + 3 + 4




