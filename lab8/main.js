
function calculateSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

const multiply = function (a, b) {
    return a * b;
};

const power = (a, b) => a ** b;

function harmonicSeries(n) {
    if (n === 1) {
        return 1;
    }
    return 1 / n + harmonicSeries(n - 1);
}

function createMultiplier(multiplier) {
    return function (value) {
        return value * multiplier;
    };
}

function applyFunction(value, func) {
    return func(value);
}

const double = x => x * 2;
const square = x => x * x;

function processSet(set, callback) {
    set.forEach(value => {
        callback(value);
    });
}

console.log("Завдання 1:", calculateSum(10)); 
console.log("Завдання 2:", multiply(3, 4)); 
console.log("Завдання 3:", power(2, 5)); 
console.log("Завдання 4:", harmonicSeries(5)); 

const triple = createMultiplier(3);
console.log("Завдання 5:", triple(5)); 

console.log("Завдання 6 (подвоєння):", applyFunction(6, double)); 
console.log("Завдання 6 (квадрат):", applyFunction(6, square)); 

const mySet = new Set([1, 2, 3, 4]);
console.log("Завдання 7:");
processSet(mySet, value => console.log(value * 10));
