const sumAll = function(a,b) {
    let sum = 0;

    if (isNaN(a) |
        isNaN(b) |
        a < 0 | 
        b < 0 | 
        isFloat(a) | 
        isFloat(b)){
        return "ERROR";
    }

    let minor = a < b ? a :b
    let major = a > b? a:b
    for (let i = minor; i <= major; i++){
        sum+=i
        
    }
    return sum;

};

function isFloat(n){
    let int = Math.floor(n);
    return int !== n;
}

console.log(sumAll(1,4))

// Do not edit below this line
module.exports = sumAll;
