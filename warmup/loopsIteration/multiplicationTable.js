// Multiplication Table of a Number
// Example 1:
// Input: n = 5

// Output: [5,10,15,20,25,30,35,40,45,50]

// Example 2:
// Input: n = 7

// Output: [7,14,21,28,35,42,49,56,63,70]

// Constraints:
// -1000 <= n <= 1000.
// n can be negative, zero, or positive.

// solution 1: For Loop
// time: O(1) | space: O(1)
/**
 * @param {number} n
 * @return {number[]}
 */
const multiplicationTable = (n) => {
  const result = [];
  for (let i = 1; i <= 10; i++) {
    result.push(n * i);
  }
  return result;
};

// solution 2: Repeated Addition
// time: O(1) | space: O(1)
const multiplicationTableRepeatedAddition = (n) => {
  const result = [];
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += n;
    result.push(sum);
  }
  return result;
};
