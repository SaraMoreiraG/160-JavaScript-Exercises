function findShortestElement(arr) {
    // your code here
    var str = "";
    if (arr != 0){
        str = arr[0];
        for (i = 1; i < arr.length; i++){
            if (arr[i].length < str.length)
                str = arr[i];
        }
    }
    return (str);
}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'