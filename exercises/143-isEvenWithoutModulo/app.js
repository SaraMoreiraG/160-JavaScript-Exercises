function isEvenWithoutModulo(num) {
    // your code here
    return (Number.isInteger(num/2));
}
let output = isEvenWithoutModulo(8);
console.log(output); // --> true