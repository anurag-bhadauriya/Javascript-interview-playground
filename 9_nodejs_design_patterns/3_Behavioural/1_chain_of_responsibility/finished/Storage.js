class Storage {
    constructor(name, inventory = [], deliveryTime = 0) {
        this.name = name;
        this.inventory = inventory;
        this.deliveryTime = deliveryTime;

        this.next = null;
    }

    lookInLocalInventory(itemName) {
        let idx = this.inventory.map( item => item.name).indexOf(itemName);
        return this.inventory[idx];
    }

    setNext(storage){
        this.next = storage;
    }

    find(itemName){
        let found = this.lookInLocalInventory(itemName);
        if(found){
           return {
                name: found.name,
                qty: found.qty,
                location: this.name,
                deliveryTime: ( this.deliveryTime === 0) ? 'now' : `${this.deliveryTime} day(s)`
            }; 
        } else if (this.next) {
            return this.next.find(itemName);
        } else {
            return `We do not carry ${itemName}`;
        }
    }
}

module.exports = Storage;

