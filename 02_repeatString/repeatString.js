const repeatString = function(str, integer) {
    let times = parseInt(integer);
    let result = times < 0? "ERROR":"";

    if (!isNaN(times)){
        for (let i = 0; i < times; i++ ){
            result += str;
        }

    }
    return result;

};

// Do not edit below this line
module.exports = repeatString;
