function sumDigits(num) {
    // your code here
    var converted = num.toString().split('');
    var sum = 0;
    for (i = 0; i < converted.length; i++){
        if (converted[i] == '-'){
            i++;
            converted[i] = (parseInt(converted[i]) * - 1);
        }
        sum += parseInt(converted[i]);
    }
    return (sum);
}
let output = sumDigits(-316);
console.log(output); // --> 4