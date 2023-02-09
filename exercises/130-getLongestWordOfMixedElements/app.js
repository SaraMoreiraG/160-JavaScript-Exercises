function getLongestWordOfMixedElements(arr) {
    // your code here
    var long = '';
    if (arr != 0){
        for (i = 0; i < arr.length; i++){
            if (typeof arr[i] == 'string'){
                if (arr[i].length > long.length)
                    long = arr[i];
            }
        }
    }
    return (long);
}

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'