function getLengthOfLongestElement(arr) {
    // Your code here
    var len = 0;
    for (i = 0; i < arr.length; i++){
        if (arr[i].length > len)
         len = arr[i].length;
    }
    return  (len);
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5