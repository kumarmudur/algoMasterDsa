// Quotient and Remainder of a Division

// solution 1: Using Division and Modulus Operators
// time: O(1) | space: O(1)
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number[]}
 */
const divide = (dividend, divisor) => {
  if (divisor === 0) throw new Error("Division by zero is not allowed.");
  const quotient = Math.floor(dividend / divisor);
  const remainder = Math.floor(dividend % divisor);
  return [quotient, remainder];
};
