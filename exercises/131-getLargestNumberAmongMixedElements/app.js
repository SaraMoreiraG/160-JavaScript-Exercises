function getLargestNumberAmongMixedElements(arr) {
    // your code here
    var long = 0;
    if (arr != 0){
        for (i = 0; i < arr.length; i++){
            if (Number.isInteger(arr[i])){
                if (arr[i] > long)
                    long = arr[i];
            }
        }
    }
    return (long);
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5