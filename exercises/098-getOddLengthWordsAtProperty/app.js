// Write your function here
function getOddLengthWordsAtProperty(obj, key){
    var newarr = [];
    let a = 0;
    if (obj[key] && Array.isArray(obj[key])){
        for (i = 0; i < obj[key].length; i++){
            if (obj[key][i].length % 2 != 0){
                newarr[a] = obj[key][i];
                a++;
            }
        }
    }
    return(newarr);
}