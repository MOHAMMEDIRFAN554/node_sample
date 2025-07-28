//Count Vowels in a String in JavaScript
function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    console.log(` vowels in "${str}" is ${count}`);
}

countVowels("hello");
countVowels("JavaScript");
countVowels("aeiou");
countVowels("sky");
countVowels("AEIOUaeiou");
