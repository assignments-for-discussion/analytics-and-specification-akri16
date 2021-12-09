
function average(numbers) {
  var noOfNans = 0;
  return numbers.reduce((total, no) => {
    if (!isNaN(no)) return total + no;
    noOfNans++;

    return total;
  }, 0) / (numbers.length - noOfNans);
}

module.exports = { average };
