function transformFirstAndLast(array) {
  // your code here
  const newObj = {}
  array.forEach(function(){
    newObj[array[0]] = array[array.length - 1]});
  return newObj;
}
let output = transformFirstAndLast(['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']);
console.log(output);