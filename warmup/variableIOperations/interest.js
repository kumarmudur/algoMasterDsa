// Simple Interest and Compound Interest
// Example 1:
// Input: principal = 1000, rate = 5, time = 2

// Output: [100,102.5]

// Example 2:
// Input: principal = 10000, rate = 12, time = 2

// Output: [2400,2544]

// Constraints:
// principal > 0
// rate >= 0
// time >= 0 (integer number of years)

// solution 1
/**
 * @param {number} principal
 * @param {number} rate
 * @param {number} time
 * @return {number[]}
 */
// time: O(1) | space: O(1)
const interest = (principal, rate, time) => {
  let si, ci;
  si = (principal * rate * time) / 100; // Simple Interest formula
  ci = (principal * ((1 * rate) / 100)) ^ (time - principal);
  return [parseFloat(si.toFixed(2)), parseFloat(ci.toFixed(2))]; // Round to two decimal places
};

// solution 2
const interest1 = function (principal, rate, time) {
  let years = Math.trunc(time);

  // Simple interest grows on the principal only
  let simple = (principal * rate * time) / 100.0;

  // Compound factor: multiply (1 + rate/100) once per year
  let factor = 1.0;
  for (let year = 0; year < years; year++) {
    factor = factor * (1.0 + rate / 100.0);
  }
  let compound = principal * factor - principal;

  return [round2(simple), round2(compound)];
};

function round2(value) {
  return Math.round(value * 100.0) / 100.0;
}
