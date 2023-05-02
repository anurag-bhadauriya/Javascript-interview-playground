/**
 * How to implement a sleep function in Node.js ?
 */

function sleep(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), time);
    });
}

async function main(time) {
    await sleep(time);
    console.log(`Slept for ${time} ms ...`);
}

console.log('Starting the program ...');
main(5000);