function transformEmployeeData(array) {
  // your code here
  var output = {};
  array.forEach(function(item, index) {
    if (!item) return;
    if (Array.isArray(item)) {
      output[index] = transformEmployeeData(item);
    } else {
      output[index] = item;
    }
  });
  return output;
  /*const newObj = {};
  array.forEach(function(){
    newObj = [array[0][0]] = array[0][0]
    console.log(array[[[0][0]]]);
  });
  /*array.forEach(function(){
    newObj = [array[0][1][0]] = array[0][1][1]
  });
  array.forEach(function(){
    newObj = [array[1][0][0]] = array[1][0][1]
  });
  array.forEach(function(){
    newObj = [array[1][1][0]] = array[1][1][1]
  });*/
  return (newObj);
}
let output = transformEmployeeData([[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']],[['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]]);
console.log(output);
//console.log(array[[[0][0]]]);