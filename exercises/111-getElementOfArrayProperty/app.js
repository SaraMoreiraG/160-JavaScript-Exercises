let obj = {
    key: ['Jamil', 'Albrey']
};

function getElementOfArrayProperty(obj, key, index) {
    // your code here
    if (obj[key] && Array.isArray(obj[key]) && obj[key][index] != 0)
        return (obj[key][index]);
}