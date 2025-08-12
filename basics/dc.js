// palindrome or not 

function palindrome(str){
  let words = str.toLowerCase().split(" ");
  let palindromes = []


  for(let word of words){
    let reversed = word.split("").reverse().join("")
    if(word === reversed){
      palindromes.push(word)
      console.log(`${str} is a palindrome`)
      
    }
    else{
    console.log(`${str} is not a palindrome`)
    }
  }
  
}

palindrome("words")
palindrome("malayalam")
