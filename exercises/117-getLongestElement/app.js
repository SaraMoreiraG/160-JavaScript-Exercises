function getLongestElement(arr) {
    // your code here
    var str = "";
    if (arr && Array.isArray(arr) && arr != 0){
      let big = arr[0];
      for (i = 1; i < arr.length; i++){
        if (big.length < arr[i].length)
          big = arr[i];
      }
      return (big);
    }
    return (str);
}
let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'