const fs = require('fs');

// Reading the file in one shot
fs.readFile('./1_events.js', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});


// Synchronous function of readfile
try {
    const data = fs.readFileSync('./2_event_loop.js', 'utf8');
    console.log(data);
} catch (err) {
    console.error(err);
}