function filterEvenLengthWords(words) {
    // your code here
    var newarr = [];
    if(words){
        for(i = 0; i < words.length; i++){
            if (words[i].length % 2 == 0)
                newarr.push(words[i]);
        }
    }
    return (newarr);
}

let output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']