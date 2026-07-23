// Prime Number Check

// Given an integer n, return true if n is a prime number and false otherwise.

// A prime number is an integer greater than 1 that has no positive divisors other than 1 and itself. Any value of 1 or less, including 0 and negative numbers, is not prime.

// Example 1:
// Input: n = 17

// Output: true

// Example 2:
// Input: n = 18

// Output: false

// Constraints:
// -2^31 <= n <= 2^31 - 1
// n may be negative, zero, or positive.

// solution 1: For Loop
// time: O(n) | space: O(1)
/**
 * @param {number}
 * @return {boolean}
 */
const isPrime = (n) => {
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};
