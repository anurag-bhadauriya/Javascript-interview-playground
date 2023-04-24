let name = {
    first: "Anurag",
    last: "bhadauriya",
};

let printName = function () {
    console.log(`Name: ${this.first} ${this.last}`);
};

let printMyName = printName.bind(name);
printMyName();
