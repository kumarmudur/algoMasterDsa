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

// Solution 2
/**
 * @param {number} year
 * @return {boolean}
 */
// time: O(1) | space: O(1)
const isLeapYear1 = (year) => {
  if (year % 4 !== 0) {
    return false;
  } else if (year % 100 !== 0) {
    return true;
  } else if (year % 400 !== 0) {
    return false;
  } else {
    return true;
  }
};
