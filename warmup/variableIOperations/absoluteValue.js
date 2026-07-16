// Absolute Value Without Built-in
// Example 1:
// Input: n = -5

// Output: 5

// Example 2:
// Input: n = 42

// Output: 42

// Constraints:
// -2^31 <= n <= 2^31 - 1
// The input fits in a 32-bit signed integer.

// solution 1: Conditional Negation
/**
 * @param {number} n
 * @return {number}
 */
// time: O(1) | space: O(1)
const absoluteValue = (n) => {
  return n < 0 ? -n : n;
};

// solution 2: Bitwise Operation
// time: O(1) | space: O(1)
const absoluteValueBitwise = (n) => {
  return (n ^ (n >> 31)) - (n >> 31);
};
