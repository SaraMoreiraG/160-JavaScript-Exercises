// Write your function here
function getNthElementOfProperty(obj, key, nth){
    if (obj[key])
        return (obj[key][nth]);
}