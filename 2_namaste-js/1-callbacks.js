// What is a callback function in JS ( Function passes as argument to another function )

let timer = setTimeout(function () {
  console.log("Timer finished...");
}, 3000);

function x(param) {
  console.log("X called...");
  param();
}

function y() {
  console.log("Y called...");
}

x(y);
