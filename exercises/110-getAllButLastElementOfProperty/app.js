let obj = {
  key: [1, 2, 3]
};
function getAllButLastElementOfProperty(obj, key) {
    // your code here
    var newarr = [];
    if (obj[key] && Array.isArray(obj[key]) && obj[key] != 0){
      for (i = 0; i < obj[key].length - 1; i++)
        newarr.push(obj[key][i]);
    }
    return (newarr);
}

let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]