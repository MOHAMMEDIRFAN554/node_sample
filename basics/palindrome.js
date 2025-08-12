function isPalindrome(str) {
    let rev= "";
    for (let i= str.length -1; i >= 0; i--) {
        rev += str[i];
    }
    if (str === rev) {
        console.log(`"${str}" is a palindrome.`);
    } else {
        console.log(`"${str}" is not a palindrome.`);
    }
}







isPalindrome("malayalam")
isPalindrome("madam");
isPalindrome("racecar");
isPalindrome("hello");
isPalindrome("level");
isPalindrome("world");
