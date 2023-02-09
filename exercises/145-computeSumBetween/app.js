function computeSumBetween(num1, num2) {
    // Your code here
    var suma = 0;
    for (i = num1; i < num2; i++){
        suma += i;
    }
    return (suma);
}

let output = computeSumBetween(2, 5);
console.log(output); // --> 9