let printFullName = function (gender, city) {
  console.log(
    `Name: ${this.firstname} ${this.lastname}, Gender: ${gender} , City: ${city}`
  );
};

let name = {
  firstname: "anurag",
  lastname: "bhadauriya",
};

let name2 = {
  firstname: "sachin",
  lastname: "tendulkar",
};

// Function borrowing or how to use call
printFullName.call(name, "Male", "FTP");
printFullName.call(name2, "Female", "CNB");

// Apply method

printFullName.apply(name, ["Male", "PUNE"]);
printFullName.apply(name2, ["Female", "BLR"]);

// Bind Method ( Binds the called method with the object & returns the copy of the method)
let printMyName = printFullName.bind(name, "Male", "GURGAON");
printMyName();

let printMyName2 = printFullName.bind(name2, "Female", "HYD");
printMyName2();
