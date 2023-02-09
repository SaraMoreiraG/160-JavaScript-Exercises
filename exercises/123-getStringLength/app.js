function getStringLength(string) {
    // your code here
    var i = 0;
    while (string.charAt(i) != '')
        i++;
    return (i)
}

let output = getStringLength('hello');
console.log(output); // --> 5