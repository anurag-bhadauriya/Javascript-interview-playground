class Shopper {

    constructor(name='unnamed person') {
        this._name = name;
        this._shoppingList = [];
    }

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get shoppingList() {
        return this._shoppingList.join(', ');
    }

    addItemToList(item) {
        this._shoppingList.push(item);
    }

    clone(){
        let proto = Object.getPrototypeOf(this);
        let clone = Object.create(proto);
        
        // Copy the data of the existing data
        clone._name = this._name;
        clone._shoppingList = [...this._shoppingList];
        return clone;
    }

}

module.exports = Shopper;
