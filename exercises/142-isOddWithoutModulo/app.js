function isOddWithoutModulo(num) {
    // your code here
    return (!Number.isInteger(num/2));
}
let output = isOddWithoutModulo(17);
console.log(output); // --> true