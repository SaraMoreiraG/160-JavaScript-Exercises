let obj = {
    key: [4, 1, 8]
};

function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    var sum = 0;
    if (obj[key] && Array.isArray(obj[key]) && obj[key] != 0){
      for (i = 0; i < obj[key].length; i++)
        sum += obj[key][i];
    }
    return (sum);
}
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13