const SENSOR_FAULTY_THRESHOLD = 0.25;

function average(numbers) {
  var noOfNans = 0;
  const len = numbers.length;

  const total = numbers.reduce((total, no) => {
    if (!isNaN(no)) return total + no;
    noOfNans++;

    return total;
  }, 0);

  const effLen = (len - noOfNans);
  const avg = total / effLen;

  return effLen / len < SENSOR_FAULTY_THRESHOLD ? NaN : avg;
}

module.exports = { average };
