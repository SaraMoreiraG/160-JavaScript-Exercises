// Write your function here
function keep(arr, keeper){
    var newarr = [];
    let a = 0;
    for (i = 0; i < arr.length; i++){
        if (arr[i] === keeper){
            newarr[a] = arr[i];
            a++;
        }
    }
    return (newarr);
}