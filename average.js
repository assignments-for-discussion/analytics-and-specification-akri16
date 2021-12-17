// Render the sensor faulty if threre are more than 25% of NaNs in the data
const SENSOR_FAULTY_THRESHOLD = 0.25;

function calculateAverage(numbers) {
  const len = numbers.length;
  return numbers.reduce((partSum, no) => partSum + no, 0) / len;
}

function average(numbers) {
  const originalLength = numbers.length;

  // Remove NaNs from the data
  numbers = numbers.filter((no) => !isNaN(no));

  // Check if the sensor is faulty
  const nanFraction = numbers.length / originalLength;
  if (nanFraction < SENSOR_FAULTY_THRESHOLD) {
    return NaN;
  }

  // Calculate the average
  return calculateAverage(numbers);
}

module.exports = {average};
