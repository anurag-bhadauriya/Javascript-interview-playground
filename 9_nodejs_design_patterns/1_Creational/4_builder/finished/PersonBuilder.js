class Person {

    constructor(builder){
        this.name = builder.name;
        this.isEmployee = builder.isEmployee || false;
        this.isManager = builder.isManager || false;
        this.hours = builder.hours || 0;
        this.money = builder.money || 0;
        this.shoppingList = builder.shoppingList || [];
    }

    toString() {
        return JSON.stringify(this);
    }

}

class PersonBuilder {

    constructor(name) {
        this.name = name;
    }

    makeEmployee(){
        this.isEmployee = true;
        return this;
    }

    makeManager(){
        this.isManager = true;
        return this;
    }

    addHours(hours=40){
        this.hours = hours;
        return this;
    }

    addMoney(money =0){
        this.money = money;
        return this;
    }

    makeList(shoppingList = []){
        this.shoppingList = shoppingList;
        return this;
    }

    build(){
        return new Person(this);
    }
}

module.exports = PersonBuilder;
