// https://dev.to/midasxiv/scopes-hoisting-closures-tricky-questions-4c85

/**
 * Example 1 ============================= >
 */

var variable = 10;
(() => {
  console.log(variable);
  var variable = 20;
  console.log(variable);
})();

/**
 * Example 2 ============================= >
 */

var variable = 10;
(() => {
  console.log(variable); 
  variable = 20;
  console.log(variable);
})();


/**
 * Example 3 ============================= >
 */

var variable = 10;
(() => {
  console.log(variable); // undefined
  variable = 20;
  console.log(variable); // 20
})();
var variable = 30;
console.log(variable);

/**
 * Example 4 ============================= >
 */

var variable = 10;
(() => {
  console.log(variable); // undefined
  var variable = 20;
  console.log(variable); // 20
})();

console.log(variable);
var variable = 30;


/**
 * Example 5 ============================= >
 */

var variable = 10;
(() => {
  console.log(variable); // undefined
  variable = 20;
  console.log(variable); // 20
})();

console.log(variable);
var variable = 30;


/**
 * Example 6 ============================= >
 */

var variable = 10;
(() => {
  variable_3 = 35;
  console.log(variable_3);
  var variable_3 = 45;
  variable_2 = 15;
  console.log(variable); // 20
})();

console.log(variable_2);
console.log(variable_3);
var variable = 30;

