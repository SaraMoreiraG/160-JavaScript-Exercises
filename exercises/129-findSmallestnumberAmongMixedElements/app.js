function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  var small = 0;
  var len = Infinity;
  if (arr != 0){
      for (i = 0; i < arr.length; i++){
          if (Number.isInteger(arr[i])){
              if (arr[i]< len){
                  small = arr[i];
                  len = small;
              }
          }
      }
  }
  return (small);
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4