let obj = {
  key: [1, 2, 4]
};
function getLargestElementAtProperty(obj, key) {
    // your code here
    var newarr = [];
    if (obj[key] && Array.isArray(obj[key]) && obj[key] != 0){
      let big = obj[key][0];
      for (i = 1; i < obj[key].length; i++){
        if (big < obj[key][i])
          big = obj[key][i];
      }
      return (big);
    }
    return (newarr);
}
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4