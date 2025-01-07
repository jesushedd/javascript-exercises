const convertToCelsius = function(temp) {
  return Number(((5 / 9) * (temp - 32)).toFixed(1))
};

const convertToFahrenheit = function(temp) {
  return Number(((9*temp/5)+32).toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
