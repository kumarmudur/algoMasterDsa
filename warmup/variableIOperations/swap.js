// Swap Two Numbers
// Example 1:
// Input: a = 5, b = 7

// Output: [7,5]

// Example 2:
// Input: a = -3, b = 9

// Output: [9,-3]

// Constraints:
// Both a and b fit in the 32-bit signed integer range: -2^31 <= a, b <= 2^31 - 1.
// The values may be negative, zero, or equal to each other.

// solution 1
/**
 * @param {number} a
 * @param {number} b
 * @return {number[]}
 */
// time: O(1) | space: O(1)
const swap = (a, b) => {
  return [b, a];
};

// solution 2
// time: O(1) | space: O(1)
const swap2 = (a, b) => {
  let temp = a;
  a = b;
  b = temp;
  return [a, b];
};

// solution 3
// time: O(1) | space: O(1)
const swap3 = (a, b) => {
  a = a + b;
  b = a - b;
  a = a - b;
  return [a, b];
};
