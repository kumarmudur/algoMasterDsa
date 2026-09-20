// Given an integer marks between 0 and 100, return the corresponding letter grade.

// The grade bands are:

// 90 to 100 returns "A"
// 80 to 89 returns "B"
// 70 to 79 returns "C"
// 60 to 69 returns "D"
// below 60 returns "F"
// Example 1:
// Input: marks = 95

// Output: "A"

// Example 2:
// Input: marks = 72

// Output: "C"

// Constraints:
// 0 <= marks <= 100

// solution 1
/**
 * @param {number} marks
 * @return {string}
 */
// time: O(1) | space: O(1)
const gradeMarks = (marks) => {
  if (marks >= 90) {
    return "A";
  } else if (marks >= 80) {
    return "B";
  } else if (marks >= 70) {
    return "C";
  } else if (marks >= 60) {
    return "D";
  } else {
    return "F";
  }
};
