/**
 * We will be creating a filesystem proxy which will allow us to 
 * read only markdown files. It won't let us read any files of any other types.
 */


var path = require('path');
var FS_Proxy = require('./FS_Proxy');
var fs = new FS_Proxy(require('fs'));

var txtFile = path.join(__dirname, 'Readme.txt');
var mdFile = path.join(__dirname, 'Readme.md');

var result = (error, contents) => {

    if (error) {
        console.log('\x07');
        console.error(error);
        process.exit(0);
    }

    console.log('reading file...');
    console.log(contents);

}

fs.readFile(mdFile, 'UTF-8', result);
fs.readFile(txtFile, 'UTF-8', result);
