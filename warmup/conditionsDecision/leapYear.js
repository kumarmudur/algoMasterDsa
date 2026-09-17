// Leap Year Check

// Example 1:
// Input: year = 2000

// Output: true

// Example 2:
// Input: year = 1900

// Output: false

// Constraints:
// year is a positive integer.

// Solution 1
/**
 * @param {number} year
 * @return {boolean}
 */
// time: O(1) | space: O(1)
const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
