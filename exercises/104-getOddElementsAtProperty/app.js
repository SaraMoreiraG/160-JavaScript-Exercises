let obj = {
  key: [1, 2, 3, 4, 5]
};

function getOddElementsAtProperty(obj, key) {
    // your code here
    var newarr = [];
    if (obj[key] && Array.isArray(obj[key])){
      for (i = 0; i < obj[key].length; i++){
        if (obj[key][i] % 2 != 0)
          newarr.push(obj[key][i]);
      }
    }
    return (newarr);
}

let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]