// Convert Seconds to Hours, Minutes, Seconds
// Example 1:
// Input: totalSeconds = 3661

// Output: [1,1,1]

// Example 2:
// Input: totalSeconds = 86399

// Output: [23,59,59]

// Constraints:
// totalSeconds is a non-negative integer.

//solution 1
// time: O(1) | space: O(1)
/**
 * @param {number} totalSeconds
 * @return {number[]}
 */
const secondsToHMS = (totalSeconds) => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return [hours, minutes, seconds];
};
