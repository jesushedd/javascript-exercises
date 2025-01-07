const leapYears = function(year) {
    let divBy4 =  (Math.round(year % 4,0) === 0)
    let divBy100 =  (Math.round(year % 100,0) === 0)
    let divBy400 = (Math.round(year % 400,0) === 0)
    
    return (divBy4 && !divBy100) || divBy400

};

// Do not edit below this line
module.exports = leapYears;
