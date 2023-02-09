function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  var average = 0;
  if (obj[key] && Array.isArray(obj[key]) && obj[key] != 0){
    for (i = 0; i < obj[key].length; i++){
      average += obj[key][i];
    }
    average /= i;
  }
  return(average);
}