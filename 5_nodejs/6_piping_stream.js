const fs = require('fs');

const readerStream = fs.createReadStream('./1_events.js');
const writerStream = fs.createWriteStream('1_events_clone_created_using_6_piping_stream.js');

readerStream.pipe(writerStream);
console.log('Program Ended');