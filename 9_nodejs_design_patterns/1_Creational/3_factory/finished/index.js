/**
 * Base Class - Person
 */
class Person {

    constructor(name='unnamed person')  {
        this.name = name;
    }

    toString() {
        return JSON.stringify(this);
    }

}

/**
 * Shopper extending Person
 */
class Shopper extends Person {

    constructor(name, money=0) {
        super(name);
        this.money = money;
        this.employed = false;
    }

}

/**
 * Employee extending Shopper
 */
class Employee extends Shopper {

    constructor(name, money=0, employer='') {
        super(name, money);
        this.employer = employer;
        this.employed = true;
    }

    payDay(money=0) {
        this.money += money;
    }

}

/**
 *  UserFactory class which acts as a generator for the different type of objects
 */
class UserFactory {

    static userType = {
        EMPLOYEE : 'EMPLOYEE',
        SHOPPER: 'SHOPPER'
    };

    constructor(type, name, money =0, employer){
        switch(type){
            case UserFactory.userType.EMPLOYEE:
                this.user = new Employee(name, money, employer);
                break;
            case UserFactory.userType.SHOPPER:
                this.user = new Shopper(name, money);
                break;
            default:
                throw new Error('Invalid User Type !!!');
                break;
        }
        return this.user;
    }
}

/**
 *  Running Logic here
 */
let alex = new UserFactory( UserFactory.userType.SHOPPER, 'Alex Banks', 100);
let eve = new UserFactory( UserFactory.userType.EMPLOYEE, 'Eve Parcello', 100, 'This and That');

eve.payDay(200);

console.log( alex.toString() )
console.log( eve.toString() )