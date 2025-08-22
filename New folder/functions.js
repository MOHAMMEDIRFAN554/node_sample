function palindrome(str){
    let word = str.split("").reverse().join("")
    if(str==word){
        return true
    }
    else {
        return false
    }
}
function sum(n){


}

module.exports = {palindrome,sum}