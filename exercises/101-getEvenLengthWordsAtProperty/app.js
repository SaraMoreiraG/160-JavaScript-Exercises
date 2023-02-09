let obj = {
  key: ['a', 'long', 'game']
};
function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
    var newarr = [];
    if (obj[key]){
      for (i = 0; i < obj[key].length; i++){
        if (obj[key][i].length % 2 == 0){
          newarr.push(obj[key][i]);
        }
      }
    }
    return (newarr);
}

let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']