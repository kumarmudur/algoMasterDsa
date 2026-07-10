// Example 1:
// Input: x1 = 1, y1 = 1, x2 = 2, y2 = 2, x3 = 3, y3 = 3

// Output: true

// Example 2:
// Input: x1 = 1, y1 = 1, x2 = 2, y2 = 2, x3 = 3, y3 = 5

// Output: false

// Constraints:
// All coordinates are integers within a 32-bit signed range.

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @param {number} x3
 * @param {number} y3
 * @return {boolean}
 */
// time: O(1) | space: O(1)
const areCollinear = (x1, y1, x2, y2, x3, y3) => {
  let crossProduct = (y2 - y1) * (x3 - x1) - (x2 - x1) * (y3 - y1);
  return crossProduct === 0;
};
