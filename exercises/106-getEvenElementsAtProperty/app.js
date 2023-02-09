
let obj = {
  key: [1000, 11, 50, 17]
};

function getEvenElementsAtProperty(obj, key) {
    // your code here
    var newarr = [];
    if (obj[key] && Array.isArray(obj[key])){
      for (i = 0; i < obj[key].length; i++){
        if (obj[key][i] % 2 == 0)
          newarr.push(obj[key][i]);
      }
    }
    return (newarr);
}
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]