const add = function(a,b) {
  return a + b;
	
};

const subtract = function(a,b) {
  return a - b;
	
};

const sum = function(arr) {
  let sum = 0;
  for (n of arr){
    sum += n
  }
  return sum;
	
};

const multiply = function(arr) {
  let mult = 1;
  for (n of arr){
    mult *= n
  }
  return mult
};

const power = function(a,b) {
  return Math.pow(a,b);
	
};

const factorial = function(a) {
  if (a === 1 || a === 0){
    return 1
  }
  return a * factorial(a-1);
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
