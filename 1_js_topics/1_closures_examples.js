/**
 * Example 1 ============================= >
 */

function foo() {
    let a = 0;

    function bar(){
        console.log('Number is : ', a);
    }

    function increase(num){
        a += num;
    }

    return [bar, increase];
}

let val = foo();
val[0]();
val[1](5);
val[0]();

let val2 = foo();
val2[0]();
val2[1](5);
val2[0]();

/**
 * Example 2 ============================= >
 */

let countEven = 0;
const items = [1, 5, 100, 10];

const callback = (number) => {
    if(number%2 === 0){
        countEven++;
    }
}

items.forEach(callback);
console.log(countEven);


/**
 * Example 3 ============================= >
 */

(function immediateA(a) {
  return (function immediateB(b) {
    console.log(a); // What is logged?
  })(1);
})(0);


/**
 * Example 4 ============================= >
 */

let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?
  }
  console.log(count); // What is logged?
})();

/**
 * Example 5 ============================= >
 */

for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // What is logged?
  }, 1000);
}


/**
 * Example 6 ============================= >
 * Side challenge: 
 * how would you fix this example to log 0, 1, 2 values after passing 1 second?
 */

for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // What is logged?
  }, 1000);
}


/**
 * Example 7 ============================= >
 * Side challenge: 
 * how would you fix log() function to return the message having the actual count value?
 */

function createIncrement() {
  let count = 0;
  function increment() { 
    count++;
  }

  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }
  
  return [increment, log];
}

const [increment, log] = createIncrement();
increment(); 
increment(); 
increment(); 
log(); // What is logged?


/**
 * Example 8 ============================= >
 */