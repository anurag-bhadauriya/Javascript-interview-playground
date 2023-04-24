function printThis() {
    console.log(this);
}

printThis(); // global object will gets printed

let obj = {
    a: 10,
    b: 20,
    c: printThis
};

obj.c(); // pointer to obj will get printed

let x = obj.c;
x(); // prints the global object