/*
Function which takes another function as an argument or 
returns a function from it is called higher order function
*/

// Y is a higher order function here with a is callback function
function y(a) {
  console.log("y called...");
  a();
}

// X here
function x() {
  console.log("x called...");
}

y(x);

/**
 * Problem statement: Given an arry of radius.
 * Find the area/circumference/diameter of all circles.
 */

// === Approach 1 ===
const rad = [3, 2, 1, 4];

const calcArea = function (radius) {
  const area = [];
  for (let i = 0; i < radius.length; i++) {
    area.push(Math.PI * radius[i] * radius[i]);
  }
  return area;
};

console.log(calcArea(rad));

const calcCircumference = function (radius) {
  const circum = [];
  for (let i = 0; i < radius.length; i++) {
    circum.push(2 * Math.PI * radius[i]);
  }
  return circum;
};

console.log(calcCircumference(rad));

const calcDiameter = function (radius) {
  const diameter = [];
  for (let i = 0; i < radius.length; i++) {
    diameter.push(2 * radius[i]);
  }
  return diameter;
};

console.log(calcDiameter(rad));

// === Approach 2 : Using higher order function ====

// THis will do all the calculations
const calculate = function (radius, logic) {
  const res = [];
  for (let i = 0; i < radius.length; i++) {
    res.push(logic(radius[i]));
  }
  return res;
};

const area = function (r) {
  return Math.PI * r * r;
};

const circumFerence = function (r) {
  return 2 * Math.PI * r;
};

const diameter = function (r) {
  return 2 * r;
};

console.log("Area: ", calculate(rad, area));
console.log("CircumFerence: ", calculate(rad, circumFerence));
console.log("Diameter: ", calculate(rad, diameter));

// Approach 3: Using map function

console.log(rad.map(area));
console.log(rad.map(circumFerence));
console.log(rad.map(diameter));
