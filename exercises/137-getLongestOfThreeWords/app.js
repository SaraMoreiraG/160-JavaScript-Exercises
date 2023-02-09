function getLongestOfThreeWords(word1, word2, word3) {
    // your code here
    var long = word1;
    if (word2.length > long.length)
        long = word2;
    if (word3.length > long.length)
        long = word3;
    return (long);
}

let output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'