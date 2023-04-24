/**
 * Prototype based object creation
 * Using object to object inheritance 
 */

let obj1 = { a: 10, b: 20 };

let obj2 = Object.create(obj1);

console.log(obj2); // ?
console.log(obj2.a); // ?

obj2.a++;
console.log(obj2.a); // ?
console.log(obj1.a); // ?
console.log(obj2); // ?
