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
