// Write your function here
function getElementsGreaterThan10AtProperty(obj, key){
    var newobj = [];
    let a = 0;
    if (obj[key]){
        for (i = 0; i < obj[key].length; i++){
            if (obj[key][i] > 10){
                newobj[a] = obj[key][i];
                a++;
            }
        }
    }
    return (newobj);
}