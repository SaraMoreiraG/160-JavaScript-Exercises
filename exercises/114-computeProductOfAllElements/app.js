function computeProductOfAllElements(arr) {
  // your code here
  let product = 0;
  if (arr != 0){
    product = 1;
    for (i = 0; i < arr.length; i++)
      product *= arr[i];
  }
  return (product);
  
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60

