function computeSumOfAllElements(arr) {
  // your code here
  var sum = 0;
  for (i = 0; i < arr.length; i++)
    sum += arr[i];
  return (sum);
}

let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6