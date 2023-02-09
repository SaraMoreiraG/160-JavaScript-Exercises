function calculateBillTotal(preTaxAndTipAmount) {
    // your code here
    return (preTaxAndTipAmount * 0.15 + preTaxAndTipAmount * 0.095 + preTaxAndTipAmount);
}
let output = calculateBillTotal(20);
console.log(output); // --> 24.9