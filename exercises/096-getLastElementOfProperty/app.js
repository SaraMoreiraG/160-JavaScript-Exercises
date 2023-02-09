// Write your function here
function getLastElementOfProperty(obj, key){
    if (obj[key])
        return (obj[key][obj[key].length - 1]);
}