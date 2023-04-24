var a = 10;
console.log(a);

function task() {
    var a = 20;
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a);
    }
    console.log(a);
}

task();
console.log(a);