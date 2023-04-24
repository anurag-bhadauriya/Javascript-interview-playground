gm('Anurag');
ge('Shivam');

let gm = function (name) {
    console.log(`Good morning ${name}`);
}

let ge = function (name) {
    console.log(`Good evening ${name}`);
}

/**
 * gm & ge are in temporal dead zone hence 
 * they can be accessed before initialization.
 */