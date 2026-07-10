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

// solution 2
// time: O(1) | space: O(1)
const vowelOrConsonant1 = (ch) => {
  const c = ch.toLowerCase();
  if (c === "a" || c === "e" || c === "i" || c === "o" || c === "u") {
    return "Vowel";
  } else {
    return "Consonant";
  }
};

// solution 3
// time: O(1) | space: O(1)
const vowelOrConsonant2 = (ch) => {
  const c = ch.toLowerCase();
  switch (c) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      return "Vowel";
    default:
      return "Consonant";
  }
};
