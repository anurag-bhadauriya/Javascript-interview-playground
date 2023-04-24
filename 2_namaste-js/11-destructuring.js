/**
 * Destructuring an object
 */
const obj = { a: 1, b: 2, c: 3 };
let { a, b, c } = obj;

console.log(a, b, c);

console.log(Object.keys(obj));

/**
 * Destructuring an array
 */
const arr = ["anurag", "bhadauriya", "is"];
const [first, last, temp] = arr;

console.log(first, last, temp);
