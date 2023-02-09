function getLargestElement(arr) {
  // your code here
  var largest = 0;
    if (arr != 0){
        largest = arr[0];
        for (i = 1; i < arr.length; i++){
            if (arr[i] > largest)
                largest = arr[i];
        }
    }
  return (largest);
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;