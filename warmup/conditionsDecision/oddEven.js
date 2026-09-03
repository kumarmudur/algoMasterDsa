// Given an integer n, determine whether it is even or odd.

// Return the string "Even" if n is divisible by 2, and "Odd" otherwise.

// Example 1:
// Input: n = 4

// Output: "Even"

// Example 2:
// Input: n = -3

// Output: "Odd"

// Constraints:
// n is an integer that fits in a 32-bit signed range.
// n can be negative, zero, or positive.

// Solution 1
// time: O(1) | space: O(1)
function oddEven(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// Solution 2
// time: O(1) | space: O(1)
function oddEven1(num) {
  if ((num & 1) === 1) {
    return "Odd";
  }
  return "Even";
}
