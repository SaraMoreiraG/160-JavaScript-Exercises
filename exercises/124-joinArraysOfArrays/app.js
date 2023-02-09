function joinArrayOfArrays(arr) {
  // your code here
  var newarr = arr[0];
  for (i = 1; i < arr.length; i++)
    newarr = newarr.concat(arr[i]);
  return (newarr);
}
let output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']