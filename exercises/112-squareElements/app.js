function squareElements(arr) {
  // your code here
  var newarr = [];
    if (arr && Array.isArray(arr)){
      for (i = 0; i < arr.length; i++){
        newarr.push(arr[i] * arr[i]);
      }
    }
    return (newarr);
}

let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]