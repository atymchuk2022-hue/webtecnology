function findMax(a, b) {
  return a > b ? a : b;
}
console.log("Завдання 1: findMax(5, 9) =", findMax(5, 9));
const subtract = function (a, b) {
  return a - b;
};
console.log("Завдання 2: subtract(10, 4) =", subtract(10, 4));
const sqrt = n => Math.sqrt(n);
console.log("Завдання 3: sqrt(16) =", sqrt(16));
function geometricProgression(n, a, r) {
  if (n === 1) {
    return a;
  }
  return a * Math.pow(r, n - 1) + geometricProgression(n - 1, a, r);
}
console.log(
  "Завдання 4: geometricProgression(4, 2, 3) =",
  geometricProgression(4, 2, 3)
);
function createDivider(divisor) {
  return function (number) {
    return number / divisor;
  };
}
const divideBy2 = createDivider(2);
console.log("Завдання 5: divideBy2(20) =", divideBy2(20));
function applyOperation(a, b, func) {
  return func(a, b);
}
const add = (x, y) => x + y;
const multiply = (x, y) => x * y;
console.log("Завдання 6 (додавання):", applyOperation(3, 4, add));
console.log("Завдання 6 (множення):", applyOperation(3, 4, multiply));
function processSet(set, callback) {
  const result = new Set();
  for (let value of set) {
    result.add(callback(value));
  }
  return result;
}
const numbers = new Set([1, 2, 3, 4]);
const squared = processSet(numbers, x => x * x);

console.log("Завдання 7: processSet ->", squared);
