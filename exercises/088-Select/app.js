// Write your function here
function select(arr, obj){
   let newobj = {};
    for (var i = 0; i < arr.length; i++){
        if (obj[arr[i]])
            newobj[arr[i]] = obj[arr[i]];
    }
    return newobj;
}