const PI = 3.14159;

const sqrtBaby = (num) => {
  if (num === 0) return 0;

  let guess = num;

  for (let i = 0; i < 50; i++) {
    guess = (guess + num / guess) / 2.0;
  }

  return guess;
};

const round2 = (value) => Math.round(value * 100) / 100;

// time: O(1) | space: O(1)
const areaAndPerimeter = (shape, dims) => {
  let area = 0,
    perimeter = 0;

  if (shape === "rectangle") {
    const length = dims[0],
      width = dims[1];
    area = length * width;
    perimeter = 2 * (length + width);
  } else if (shape === "square") {
    const side = dims[0];
    area = side * side;
    perimeter = 4 * side;
  } else if (shape === "circle") {
    const radius = dims[0];
    area = PI * radius * radius;
    perimeter = 2 * PI * radius;
  } else if (shape === "triangle") {
    const a = dims[0],
      b = dims[1],
      c = dims[2];
    perimeter = a + b + c;
    const s = perimeter / 2.0;
    area = sqrtBaby(s * (s - a) * (s - b) * (s - c));
  }

  return [round2(area), round2(perimeter)];
};
