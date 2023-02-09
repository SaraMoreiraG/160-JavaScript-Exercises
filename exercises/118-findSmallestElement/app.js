function findSmallestElement(arr) {
    // your code here
    var newarr = 0;
    if (arr && Array.isArray(arr) && arr != 0){
      var len = arr[0];
      for (i = 1; i < arr.length; i++){
        if (len > arr[i])
          len = arr[i];
      }
      return(len);
    }
    return (newarr);
}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1