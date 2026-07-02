const PI = 3.14159;

const sqrtBaby = (num) => {
  if (num === 0) return 0;

  let guess = num;

  for (let i = 0; i < 50; i++) {
    guess = (guess + num / guess) / 2.0;
  }

  return guess;
};
