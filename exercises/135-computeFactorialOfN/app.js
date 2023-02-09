function computeFactorialOfN(n) {
    // your code here
    var factorial = 1;
    for (i = 1; i <= n; i++)
        factorial *= i;
    return (factorial);
}

let output = computeFactorialOfN(3); console.log(output); // --> 6