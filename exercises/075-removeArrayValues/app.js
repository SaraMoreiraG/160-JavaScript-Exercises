function removeArrayValues(obj) {
    // your code here
    for (var key in obj){
        if (Array.isArray(obj[key]))
            delete obj[key];
    }
}