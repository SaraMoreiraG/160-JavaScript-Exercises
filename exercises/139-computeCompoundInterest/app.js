function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
  // your code here
  var pow = Math.pow((1 + interestRate / compoundingFrequency), (compoundingFrequency * timeInYears));
  var amount = principal * pow - principal;
  return (amount);
}

let output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.83682213410543