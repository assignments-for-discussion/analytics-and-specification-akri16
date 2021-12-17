// Render the sensor faulty if threre are more than <value> of NaNs in the data
const SENSOR_FAULTY_THRESHOLD = 0.25;

// Mark a value as an outlier if its noise is greater than <value>
const OUTLIER_NOISE_THRESHOLD = 500;

function calculateAverage(numbers) {
  const len = numbers.length;
  return numbers.reduce((partSum, no) => partSum + no, 0) / len;
}

function calculateNoise(numbers, i) {
  const len = numbers.length;
  let noise = null;

  for (let k = 0; k < len; k++) {
    noise += numbers[Math.max(0, i - k)] / len;
  }
  return numbers[i] - noise;
}

// Apply moving average filter to detect and discard noise
function removeOutliers(numbers) {
  const len = numbers.length;
  const sanitized = [];

  for (let i = 0; i < len; i++) {
    const noise = calculateNoise(numbers, i);

    if (noise < OUTLIER_NOISE_THRESHOLD) {
      sanitized.push(numbers[i]);
    }
  }

  return sanitized;
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

  // Remove outliers from the data
  numbers = removeOutliers(numbers);

  // Calculate the average
  return calculateAverage(numbers);
}

module.exports = {average};
