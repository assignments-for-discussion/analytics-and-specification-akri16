
function average(numbers) {
  var noOfNans = 0;
  return numbers.reduce((total, i) => {
    if (!isNaN(i)) return total + i;
    noOfNans++;

    return total;
  }, 0) / (numbers.length - noOfNans);
}

module.exports = { average };
