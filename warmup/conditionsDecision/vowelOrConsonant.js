/**
 * @param {string} ch
 * @return {string}
 */
// time: O(1) | space: O(1)
const vowelOrConsonant = (ch) => {
  const vowels = "aeiouAEIOU";
  if (vowels.includes(ch)) {
    return "Vowel";
  } else {
    return "Consonant";
  }
};
