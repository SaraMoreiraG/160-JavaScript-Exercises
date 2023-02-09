function computeSummationToN(n) {
  // your code here
  var num = 0;
  for (i = 0; i < n + 1; i++){
    num += i;
  }
  return (num);
}

let output = computeSummationToN(6);
console.log(output); // --> 21

