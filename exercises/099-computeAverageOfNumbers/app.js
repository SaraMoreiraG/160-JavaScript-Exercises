// Write your function here !
function computeAverageOfNumbers(arr){
    var average = 0;
    for (i = 0; i < arr.length; i++)
        average += arr[i];
    if (arr != 0)
        return (average / i);
    return (average);
}