var { writeFile, existsSync, readFileSync, unlink } = require('fs');
const localStorageFileName = 'localStorage.json';

class LocalStorage {

    constructor() {
        if( existsSync(localStorageFileName)) {
            console.log(`Loading items from ${localStorageFileName} ...`);
            let fileData = readFileSync(localStorageFileName);
            this.items = JSON.parse(fileData);
        } else {
            this.items = {};
        }
    }

    get length(){
        return Object.keys(this.items).length;
    }

    getItem(key){
        return this.items[key];
    }

    setItem(key, value){
        this.items[key] = value;
        writeFile(localStorageFileName, JSON.stringify(this.items), (error) => {
            if(error){
                console.error(error);
                return new Promise((resolve, reject) => { reject(); });
            }
            return new Promise((resolve, reject) => { resolve(); });
        });
    }

    clear(){
        this.items = {};
        unlink(localStorageFileName, () => {
            console.log(`${localStorageFileName} file removed !!!`);
        });
        return;
    }
}

module.exports = new LocalStorage();