// Print Numbers from 1 to N
// Example 1:
// Input: n = 5

// Output: [1,2,3,4,5]

// Example 2:
// Input: n = 3

// Output: [1,2,3]

// Constraints:
// 1 <= n <= 1000.
// n is a positive integer, so the result always contains at least one element.

// solution 1: For Loop
// time: O(n) | space: O(n)
/**
 * @param {number} n
 * @return {number[]}
 */
const printNumbers = (n) => {
  const result = [];
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }
  return result;
};

// solution 2: Recursion
// time: O(n) | space: O(n)
const printNumbersRecursion = (n) => {
  const result = [];
  const helper = (current) => {
    if (current > n) return;
    result.push(current);
    helper(current + 1);
  };
  helper(1);
  return result;
};
