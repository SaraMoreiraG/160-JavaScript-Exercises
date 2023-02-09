let obj = {
  key: [2, 1, 5]
};

function getSquaredElementsAtProperty(obj, key) {
    // your code here
    var newarr = [];
    if (obj[key] && Array.isArray(obj[key])){
      for (i = 0; i < obj[key].length; i++){
        newarr.push(obj[key][i] * obj[key][i]);
      }
    }
    return (newarr);
}

let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]