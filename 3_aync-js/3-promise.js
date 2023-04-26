let p = new Promise((resolve, reject) => {
  let a = 1 + 2;
  if (a == 2) resolve("Resolved");
  else reject("Rejected");
});

p.then((data) => {
  console.log(data);
}).catch((e) => {
  console.log(e);
});
