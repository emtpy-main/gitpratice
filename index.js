
console.log("Hello, Git Practice!");
console.log("welcome to my nodejs app !")
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

console.log("2 + 3 =", add(2, 3));
console.log("4 * 5 =", multiply(4, 5));

const { greet, square, isEven } = require('./utils');

console.log(greet("World"));
console.log("Square of 6:", square(6));
console.log("Is 10 even?", isEven(10));

module.exports = { add, multiply };