function filterOddLengthWords(words) {
    // your code here
    var newarr = [];
    if(words){
        for(i = 0; i < words.length; i++){
            if (words[i].length % 2 != 0)
                newarr.push(words[i]);
        }
    }
    return (newarr);
}

let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']