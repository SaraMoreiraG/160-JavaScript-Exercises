function findShortestOfThreeWords(word1, word2, word3) {
    // your code here
    var small = word1;
    if (word2.length < small.length)
        small = word2;
    if (word3.length < small.length)
        small = word3;
    return (small);
}
let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'