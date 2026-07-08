/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {boolean}
 */

// time: O(1) | space: O(1)
const isValidTriangle = (a, b, c) => {
  return a + b > c && a + c > b && b + c > a;
};
