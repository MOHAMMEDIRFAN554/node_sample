// to find largest word
function longest(sentence) {
    let words = sentence.split(" ");
    let longest = words[0];

    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }

    console.log(`${sentence}- ${longest} is the longest word`);
}

longest("welcome to ooty");
longest("JavaScript is powerful");
longest("I love programming");
longest("Go big or go home");
longest("One");
