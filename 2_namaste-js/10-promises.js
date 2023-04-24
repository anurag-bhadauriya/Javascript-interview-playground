/**
 * Problem 1
 */

const p1 = new Promise((res, rej) => {
  setTimeout(res, 500, "one");
});

const p2 = new Promise((res, rej) => {
  setTimeout(res, 100, "two");
});

Promise.race([p1, p2]).then((res) => {
  console.log(res);
});

// Whichever promise gets resolved first is taken & the other one gets rejected by promise.race

/**
 * Problem 2
 */

async function getData() {
  return await Promise.resolve("I made it!");
}

const data = getData();
console.log("Data: ", data);

// Fix for above code
data.then((res) => {
  console.log("Data Fixed : ", res);
});

/**
 * Problem 3
 */

const p3 = () => Promise.resolve("I have resolved!");

function f1() {
  p3().then((res) => console.log(res));
  console.log("f1");
}

async function f2() {
  console.log(await p3());
  console.log("f2");
}

f1();
f2();

/**
 * Problem 4
 */

console.log(Promise.resolve(5));

/**
 *  Problem 5
 */

async function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield Promise.resolve(i);
  }
}

(async () => {
  const gen = range(1, 3);
  for await (const item of gen) {
    console.log(item);
  }
})();
