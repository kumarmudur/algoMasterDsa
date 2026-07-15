// Sum of All Divisors of a Number
// Example 1:
// Input: n = 12

// Output: 28

// Example 2:
// Input: n = 6

// Output: 12

// Constraints:
// 1 <= n <= 10^6.
// The sum fits in a 32-bit integer at this range, but use a 64-bit accumulator to stay safe against larger inputs.

// solution 1
// time: O(n) : space: O(1)
function sumOfDivisors(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  return sum;
}
