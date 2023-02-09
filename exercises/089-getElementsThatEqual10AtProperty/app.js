// Write your function here
function getElementsThatEqual10AtProperty(obj, key){
    var newarr = [];
    let a = 0;
    if (obj[key]){
        for (var i = 0; i < obj[key].length; i++){
            if (obj[key][i] == 10){
                newarr[a] = obj[key][i];
                a++;
            }
        }
    }
    return (newarr);
}