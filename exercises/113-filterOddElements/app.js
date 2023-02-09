function filterOddElements(arr) {
  // your code here
  var newarr = [];
    if (arr && Array.isArray(arr)){
      for (i = 0; i < arr.length; i++){
        if (arr[i] % 2 != 0)
          newarr.push(arr[i]);
      }
    }
    return (newarr);
}

let output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]