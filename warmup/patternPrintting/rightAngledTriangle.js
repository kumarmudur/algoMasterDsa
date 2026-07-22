// Right-Angled Triangle of Stars
// Example 1:
// Input: n = 4

// Output: ["*","**","***","****"]

// Example 2:
// Input: n = 3

// Output: ["*","**","***"]

// Constraints:
// 1 <= n <= 100.
// n is a positive integer, so the result always contains at least one row.

// solution 1: For Loop
// time: O(n^2) | space: O(n^2)
/**
 * @param {number} n
 * @return {string[]}
 */
const rightAngledTriangle = (n) => {
  const result = [];
  for (let i = 1; i <= n; i++) {
    result.push("*".repeat(i));
  }
  return result;
};
