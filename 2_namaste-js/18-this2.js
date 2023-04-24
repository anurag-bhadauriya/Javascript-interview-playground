function printThis() {
    console.log(this);
}

printThis(); // global object will gets printed

let obj = {
    a: 10,
    b: 20,
    c: printThis,
    d: function () {
        printThis()
    }
};

obj.d(); // global object gets printed