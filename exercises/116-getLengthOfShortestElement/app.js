function getLengthOfShortestElement(arr) {
    // your code here
    var len = 0;
    if (arr != 0){
        len = arr[0].length;
        for (i = 0; i < arr.length; i++){
            if (arr[i].length < len)
            len = arr[i].length;
        }
    }
    return  (len);
}
let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3