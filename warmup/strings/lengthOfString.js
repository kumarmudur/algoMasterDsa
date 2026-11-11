// Length of a String

// Example 1:
// Input: s = "hello"

// Output: 5

// Example 2:
// Input: s = "open ai"

// Output: 7

// Constraints:
// 0 <= s.length <= 10^4
// s consists of printable ASCII characters.

// solution 1: Using length property
// time: O(1) | space: O(1)
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfString = (s) => {
  return s.length;
};

// solution 2: Using for loop
// time: O(n) | space: O(1)
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfStringLoop = (s) => {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    count++;
  }
  return count;
};

// solution 3: Using recursion
// time: O(n) | space: O(n)
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfStringRecursion = (s) => {
  if (s === "") {
    return 0;
  }
  return 1 + lengthOfStringRecursion(s.slice(1));
};

// solution 4: Using reduce
// time: O(n) | space: O(1)
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfStringReduce = (s) => {
  return [...s].reduce((count) => count + 1, 0);
};
