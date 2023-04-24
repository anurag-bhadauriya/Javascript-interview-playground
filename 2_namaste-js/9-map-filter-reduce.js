const arr = [2, 1, 6, 9, 5];

/**
 * Map Function
 */

function double(x) {
  return 2 * x;
}

// Convert x to its binary form
function binary(x) {
  return x.toString(2);
}

console.log(arr.map(double));
console.log(arr.map(binary));

const out = arr.map((elem) => 3 * elem);
console.log(out);

// ====================================================

/**
 * Filter function - used to filter value inside an array
 */

// Filters out all the even values from array
const out2 = arr.filter((elem) => {
  return elem % 2 == 0 ? true : false;
});

console.log(out2);

// Filters out all the odd values from array
const out3 = arr.filter((elem) => {
  return elem % 2 == 0 ? false : true;
});

console.log(out3);

// Filters out all values greater than 4 from array
const out4 = arr.filter((elem) => elem > 4);
console.log(out4);

// ====================================================

/**
 * Reduce function ( Doesn't reduce anything )
 */

// Find sum of array
const out5 = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
});
console.log(out5);

// Find maximum value in an array
const out6 = arr.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }
  return max;
});
console.log(out6);

// ================ INTERVIEW QUESTION =================

/**
 * Find the number of peoples group by age & return in object like { <age>: <people_count>}
 */

const users = [
  { first: "f1", last: "", age: 12 },
  { first: "f2", last: "", age: 7 },
  { first: "f3", last: "", age: 7 },
  { first: "f4", last: "", age: 15 },
  { first: "f5", last: "", age: 45 },
  { first: "f6", last: "", age: 15 },
  { first: "f7", last: "", age: 45 },
  { first: "f8", last: "", age: 12 },
  { first: "f9", last: "", age: 45 },
  { first: "f10", last: "", age: 8 },
  { first: "f11", last: "", age: 12 },
];

const peopleCountByAge = users.reduce(function (groupedObj, curr) {
  const age = curr.age;
  if (groupedObj[age]) {
    groupedObj[age] += 1;
  } else {
    groupedObj[age] = 1;
  }
  return groupedObj;
}, {});

console.log(peopleCountByAge);

/**
 * Find the first name of all those people whose age is greater than 13
 */

// Approach 1
const out7 = users.filter((elem) => elem.age > 13).map((data) => data.first);
console.log(out7);

// Approach 2
const out8 = users.reduce(function (res, curr) {
  curr.age > 13 ? res.push(curr.first) : "";
  return res;
}, []);

console.log(out8);
