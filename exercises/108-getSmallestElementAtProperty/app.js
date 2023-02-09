let obj = {
  key: [2, 1, 5]
};
function getSmallestElementAtProperty(obj, key) {
    // your code here
    var newarr = [];
    if (obj[key] && Array.isArray(obj[key]) && obj[key] != 0){
      var len = obj[key][0];
      var small = 0;
      for (i = 1; i < obj[key].length; i++){
        if (len > obj[key][i]){
          len = obj[key][i];
          small = i;
        }
      }
      return(obj[key][small]);
    }
    return (newarr);
}
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1