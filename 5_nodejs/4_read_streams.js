const fs = require('fs');

// Create read stream
const readerStream = fs.createReadStream('./1_events.js');
readerStream.setEncoding('utf-8');

let fileContent = '';
// Handle the stream events
readerStream.on('data', (chunk) => {
    fileContent += chunk;
});

readerStream.on('end', () => {
    console.log('File content is read successfully: ', fileContent);
});

readerStream.on('error', (err) => {
    console.error(`Error happened readiung the file: ${err}`);
});