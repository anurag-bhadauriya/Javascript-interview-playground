// Inheritance in js

let Employee = function () {
  let name, id;

  function getName() {
    return name;
  }

  function getId() {
    return id;
  }
};

let Manager = function () {
  let hasCabin;

  function cabinAvailability() {
    return hasCabin;
  }
};
