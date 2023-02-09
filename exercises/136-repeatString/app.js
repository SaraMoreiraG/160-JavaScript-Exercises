function repeatString(string, num) {
    // your code here
    var newstring = ''
    for (i = 0; i < num; i++)
        newstring += string;
    return (newstring);
}

let output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'