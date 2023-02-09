// Write your function here
function getAverageOfElementsAtProperty(obj, key){
    if (obj[key] == 0)
        return (0);
    let total = obj[key].reduce((a, b) => a + b, 0);
    let length = obj[key].length;
    let average = total / length;
    return (average);
}