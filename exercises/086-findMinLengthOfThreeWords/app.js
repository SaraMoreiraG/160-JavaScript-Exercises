// Write your function here
function findMinLengthOfThreeWords(word1, word2, word3){
    let a = word1.length;
    let b = word2.length;
    let c = word3.length;
    if (a < b && a < c)
        return (a);
    else if  (b < a && b < c)
        return  (b);
    else
        return (c);
}