/**
 * Give the output & behaviour of the program
 * Will the program exit ?
 */

let a = true;

setTimeout(() => {
    a = false;
}, 2000);

setInterval(() => {
    if (a) {
        console.log('hello');
    }
}, 200);