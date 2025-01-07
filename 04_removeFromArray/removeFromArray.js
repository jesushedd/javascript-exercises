const removeFromArray = function(arr) {
    let toRemove = Array.prototype.slice.call(arguments,1)

    

    for (str of toRemove){
        arr = arr.filter(s => s !== str)
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
