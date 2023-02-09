function multiplyBetween(num1, num2) {
    // Your code here
    var multiply = 0;
    if (num1 < num2){
        multiply = 1;
        for (i = num1; i < num2; i++)
            multiply *= i;
    }
    return (multiply);
}

let output = multiplyBetween(2, 5);
console.log(output); // --> 24