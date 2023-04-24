let a = 10;
console.log(a);

function task() {
    let a = 20;
    console.log(a);
    if (true) {
        let a = 30;
        console.log(a);
    }
    console.log(a);
}

task();
console.log(a);