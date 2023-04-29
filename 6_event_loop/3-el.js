/**
 * Give the output & behaviour of the program
 * Will the program exit ?
 */

let a = 1;

let id = setInterval(() => {
    if (a) {
        console.log(a++);
    }
}, 200);

setTimeout(() => {
    clearInterval(id);
}, 2000);