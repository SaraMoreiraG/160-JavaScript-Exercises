function convertScoreToGrade(score) {
    // your code here
    var letter = '';
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
    return (letter);
}

let output = convertScoreToGrade(91);
console.log(output); // --> 'A'