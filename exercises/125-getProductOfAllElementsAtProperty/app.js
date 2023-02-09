let obj = {
  key: [1, 2, 3, 4]
};

function getProductOfAllElementsAtProperty(obj, key) {
    // your code here
    var product = 0;
    if (obj[key] && Array.isArray(obj[key]) && obj[key] != 0){
      product = 1;
      for (i = 0; i < obj[key].length; i++)
        product *= obj[key][i];
    }
    return (product);
}
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24