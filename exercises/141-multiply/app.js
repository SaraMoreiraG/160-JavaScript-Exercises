function multiply(num1, num2) {
    // your code here
    var mult = 0;
    var negative = false;
    if (num1 < 0 && num2 < 0){
        num1 *= -1;
        num2 *= -1;
    }
    if (num1 < 0 && num2 > 0){
        num1 *= -1;
        negative = true;
    }
    if (num1 > 0 && num2 < 0){
        num2 *= -1;
        negative = true;
    }
    for (i = 0; i < num2; i++)
        mult += num1;
    if (negative)
        mult *= -1;
    return (mult);
}

let output = multiply(4, 7);
console.log(output); // --> 28