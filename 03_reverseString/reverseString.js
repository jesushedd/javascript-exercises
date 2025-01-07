const reverseString = function(str) {
    let charArray =  str.split("");

    let charResultArray = [];

    for (i = charArray.length - 1; i >= 0; i--){
        charResultArray.push(charArray[i]);
    }

    return charResultArray.join("");

};

// Do not edit below this line
module.exports = reverseString;
