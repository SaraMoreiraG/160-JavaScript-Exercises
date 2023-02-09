function findShortestWordAmongMixedElements(arr) {
    // your code here
    var short = '';
    var shortlen = Infinity;
    if (arr != 0){
        for (i = 0; i < arr.length; i++){
            if (typeof arr[i] == 'string'){
                if (arr[i].length < shortlen){
                    short = arr[i];
                    shortlen = short.length;
                }
            }
        }
    }
    return (short);
}
let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'