function printThis() {
    console.log(this);
}

printThis(); // global object will gets printed

let obj = {
    a: 10,
    b: 20,
    c: printThis,
    d: function () {
        this.c();
        printThis();
        console.log(this.c == printThis);
    }
};

obj.d();

/**
 * L5. Global object gets printed
 * L12. pointer to obj gets printed
 * L13. Global object gets printed
 * L14. true
 */