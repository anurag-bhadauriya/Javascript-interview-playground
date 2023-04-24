/**
 * Currying can be done using two ways
 * 1. Using bind Functions
 * 2. Using closures
 */

let multiply = function (x, y) {
    console.log(x * y);
};

// Used the multiply method to create the other methods
let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);

let wierdCase = multiply.bind(this, 4, 3);
wierdCase(8);

/**
 * Currying Using functionClosures
 */

let addNumbers = function (a) {
    return function (b) {
        return function (c) {
            return function (d) {
                console.log(`Sum is: ${a + b + c + d}`);
            };
        };
    };
};

addNumbers(5)(7)(2)(3);
