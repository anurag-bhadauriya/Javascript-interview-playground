const express = require('express');
const url = require('url');
const app = express();

app.get('/', (req, res) => {
    const addr = 'http://localhost:8080/default.htm?year=2022&month=september';
    const parsedAddr = url.parse(addr);
    console.table(parsedAddr);
    res.send(`Hello World: ${__dirname}, ${__filename}`);
});

app.listen(3000, () => {
    console.log('Server started at 3000 !!!');
});