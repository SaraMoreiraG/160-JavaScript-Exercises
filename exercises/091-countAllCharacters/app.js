// Write your function here
function countAllCharacters(str){
    var newobj = {};
    for (i = 0; i < str.length; i++){
        newobj = {'str'.charAt(i): 1};
    }
    return (newobj);
}
let output = countAllCharacters('banana');
console.log(output);