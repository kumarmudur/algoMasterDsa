// Sum of Even or Odd Numbers from 1 to N
// Example 1:
// Input: n = 10, parity = "even"

// Output: 30

// The even numbers from 1 to 10 are 2, 4, 6, 8, and 10. They add up to 30.

// Example 2:
// Input: n = 9, parity = "odd"

// Output: 25

// The odd numbers from 1 to 9 are 1, 3, 5, 7, and 9, which sum to 25.

// solution 1: Loop with Modulo
/**
 * @param {number} n
 * @param {string} parity
 * @return {number}
 */
// time: O(n) | space: O(1)
const sumByParity = (n, parity) => {
  let sum = 0;
  const target = parity === "even" ? 0 : 1; // Determine the target parity (0 for even, 1 for odd)
  for (let i = 1; i <= n; i++) {
    if (i % 2 === target) {
      sum += i; // Add the number to the sum if it matches the target parity
    }
  }
  return sum;
};

// solution 2: Approach 2: Step by Two
// time: O(n/2) | space: O(1)
const sumByParityStepByTwo = (n, parity) => {
  let sum = 0;
  const start = parity === "even" ? 2 : 1; // Start from 2 for even, 1 for odd
  for (let i = start; i <= n; i += 2) {
    sum += i; // Add the number to the sum
  }
  return sum;
};
