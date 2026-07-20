// Temperature Converter
// Example 1:
// Input: temp = 100, scale = "C"

// Output: 212.00

// Example 2:
// Input: temp = 32, scale = "F"

// Output: 0.00

// Constraints:
// temp is a real number within a reasonable range.
// scale is either "C" or "F".

/**
 * @param {number} temp
 * @param {string} scale
 * @return {number}
 */
// time: O(1) | space: O(1)
const convertTemperature = (temp, scale) => {
  let result;
  if (scale === "C") {
    result = (temp * 9) / 5 + 32; // Convert Celsius to Fahrenheit
  } else if (scale === "F") {
    result = ((temp - 32) * 5) / 9; // Convert Fahrenheit to Celsius
  } else {
    throw new Error(
      "Invalid scale. Use 'C' for Celsius or 'F' for Fahrenheit.",
    );
  }
  return parseFloat(result.toFixed(2)); // Round to two decimal places
};
