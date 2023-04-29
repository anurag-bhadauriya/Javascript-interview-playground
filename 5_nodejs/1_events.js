/**
 * Callback Events with Parameters
 */

const events = require('events');
const eventEmitter = new events.EventEmitter();

function listener(code, msg) {
    console.log(`Eventhandler invoked with status: ${code} and message: ${msg}`);
}
function listener2(code, msg) {
    console.log(`listener2 invoked with status: ${code} and message: ${msg}`);
}

// Creating handlers
eventEmitter.once('status1', () => { console.log('Listener executed only once....') });
eventEmitter.on('status1', listener);
eventEmitter.on('status1', listener2);
eventEmitter.on('status2', listener);

// Emitting the events
eventEmitter.emit('status1', 200, 'MSG:DONE');
eventEmitter.emit('status2', 404, 'MSG:NOT_FOUND');

// Getting the number of listeners attached with each event type
console.log(`EventType: status1, listener count: ${eventEmitter.listenerCount('status1')}, maximum Listeners: ${eventEmitter.getMaxListeners()}`);
console.log(`EventType: status2, listener count: ${eventEmitter.listenerCount('status2')}, maximum Listeners: ${eventEmitter.getMaxListeners()}`);