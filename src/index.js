
exports.min = function min (array) {
    let minValue = ( Array.isArray(array) && array.length > 0) ? array.sort((a,b) => a - b).shift() : 0;

  return minValue;
}

exports.max = function max (array) {
  let maxValue = (Array.isArray(array) && array.length > 0) ? array.sort((a, b) => b - a).shift() : 0;
  return maxValue;
}

exports.avg = function avg (array) {
  let avgValue = (Array.isArray(array) && array.length > 0) ? array.reduce((prev, item) => prev + item, 0) / array.length : 0;
    return avgValue;
}
