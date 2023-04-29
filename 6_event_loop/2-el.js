/**
 * Give the output & behaviour of the program
 * Will the program exit ?
 */

let a = true;

setTimeout(() => {
    a = false;
}, 2000);

while (a) {
    console.log('hello');
}

/**
 * Since the program is using while before setTimeout,
 * setTimeout callback will never be pushed to call stack
 * and 'hello' will be keep consoling infinite times.
 */