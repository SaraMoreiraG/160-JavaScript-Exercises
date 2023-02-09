function convertScoreToGradeWithPlusAndMinus(score) {
    // your code here
    var letter = '';
    var sign = ''
    switch (true){
        case score > 0 && score < 59:
            letter = 'F';
            break;
        case score > 60 && score < 69:
            letter = 'D';
            break;
        case score > 70 && score < 79:
            letter = 'C';
            break;
        case score > 80 && score < 89:
            letter = 'B';
            break;
        case score > 90 && score < 100:
            letter = 'A';
            break;
        case score > 100 || score < 0:
            letter = "INVALID SCORE";
            break;
    }
    if (score % 10 <= 2 && letter != 'F')
        sign = '-';
    if (score % 10 >= 8 && letter != 'F')
        sign = '+';
    return (letter + sign);
}

let output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'