let obj = {
    person:"Rafael",
    lastName:"Leao",
    country: "Italy",
    city: "Milan",
    phoneNum: "123-456-789",
    jerseyNum: 27,
}

function countNumberOfKeys(obj) {
    // your code here
    let i = 0;
    for (var key in obj){
        i++;
    }
    return (i);
}
console.log(countNumberOfKeys(obj))
