// Count Digits in an Integer
// Example 1:
// Input: n = 12345

// Output: 5

// Example 2:
// Input: n = -789

// Output: 3

// Constraints:
// -2^31 <= n <= 2^31 - 1
// n may be negative, zero, or positive.

// solution 1: Loop with Division
/**
 * @param {number} n
 * @return {number}
 */
// time: O(log10(n)) | space: O(1)
const countDigits = (n) => {
  if (n === 0) return 1; // Special case for zero
  let count = 0;
  n = Math.abs(n); // Handle negative numbers by taking the absolute value
  while (n > 0) {
    n = Math.floor(n / 10); // Remove the last digit
    count++; // Increment the count of digits
  }
  return count; // Return the total count of digits
};
