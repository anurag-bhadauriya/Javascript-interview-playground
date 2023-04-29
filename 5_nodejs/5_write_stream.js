const fs = require('fs');

const data = 'My name is Anurag Bhadauriya !!!!';

const writerStream = fs.createWriteStream('5_write_stream_output.txt');

writerStream.write(data, 'utf8');
writerStream.end();

writerStream.on('finish', () => {
    console.log('Writing to file finished !!!');
});

writerStream.on('error', (error) => {
    console.log('Error happened while writing to file: ', error);
});