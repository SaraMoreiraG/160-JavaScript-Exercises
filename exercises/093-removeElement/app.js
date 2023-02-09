// Write your function here
function removeElement(arr, discarder){
    var newarr = [];
    let a = 0;
    for (i = 0; i < arr.length; i++){
        if (arr[i] != discarder){
            newarr[a] = arr[i];
            a++;
        }
    }
    return (newarr);
}