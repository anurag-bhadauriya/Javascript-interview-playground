console.log("Start...");

// cbt goes to callback queue
setTimeout(function cbt() {
    console.log("cbt called...");
}, 5000);

// cbf goes to microtask queue instead of callback queue
// Microtask queue has higher priority than callback queue
fetch("https://api.netflix.com").then(function cbf() {
    console.log("cbf called...");
});

console.log("End...");

// All callback functions which comes thru promises will go to the microtask queues
