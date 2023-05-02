class CatalogGroup {

    /**
     * 
     * @param {*} name - name of catalog group
     * @param {*} composites - Each array element can be either of catalogItem or catalogGroup type.
     */
    constructor(name, composites = []) {
        this.name = name;
        this.composites = composites;
    }

    get total(){
        return this.composites.reduce((total, elem) => {
            return total + elem.total;
        }, 0);
    }

    print() {
        console.log(`\n${this.name.toUpperCase()}`);
        this.composites.forEach(elem => {
            elem.print();
        });
    }
}

module.exports = CatalogGroup;