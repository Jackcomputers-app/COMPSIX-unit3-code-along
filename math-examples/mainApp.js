console.log(require("./mathUtils"));


const {
    add,
    subtract,
    multiply,
    divide,
    calculateAverage,
    findHighest,
    sumArr
} = require("./mathUtils");

console.log("Testing calculator functions:");

console.log("5 + 10 =", add(5, 10));
console.log("10 - 3 =", subtract(10, 3));
console.log("4 * 7 =", multiply(4, 7));
console.log("10 / 2 =", divide(10, 2));
console.log("10 / 0 =", divide(10, 0));

const numbers = [2, 4, 6, 8, 10];

console.log("Average:", calculateAverage(numbers));
console.log("Highest:", findHighest(numbers));
console.log("Sum:", sumArr(numbers));
