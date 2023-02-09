// Write your function here
function getFirstElementOfProperty(obj, key){
    if (obj[key])
        return (obj[key][0]);
}