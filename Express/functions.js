function palindrome(str) {
    let word = str.toLowerCase().split("").reverse().join("");
    if (str.toLowerCase() === word) {
        return `${str} is a palindrome`;
    } else {
        return `${str} is not a palindrome`;
    }
}

module.exports = { palindrome };
