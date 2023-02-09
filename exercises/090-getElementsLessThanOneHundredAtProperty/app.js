// Write your function here
function getElementsLessThan100AtProperty(obj, key){
    var newarr = [];
    let a = 0;
    if (obj[key]){
        for (i = 0; i < obj[key].length; i++){
            if (obj[key][i] < 100){
                newarr[a] = obj[key][i];
                a++;
            }
        }
    }
    return (newarr);
}