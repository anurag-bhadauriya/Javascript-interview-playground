// Prototypes & prototypal inheritance examples

/**
 * https://www.sudshekhar.com/blog/prototype-and-prototype-chain-in-javascript
 * https://javascript.info/prototype-inheritance
 */

let animal = {
  eats: true,
  walk: function () {
    console.log("Animal walk");
  },
};

let rabbit = {
  jumps: true,
};
rabbit.__proto__ = animal;

let longEar = {
  earLength: 10,
};
longEar.__proto__ = rabbit;

// we can find both properties in rabbit now:
console.log(rabbit.eats);
console.log(rabbit.jumps);
rabbit.walk();

longEar.walk();
console.log(longEar.jumps);
