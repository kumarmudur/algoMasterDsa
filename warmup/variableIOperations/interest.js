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
