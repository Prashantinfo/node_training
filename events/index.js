// // Importing events
// const EventEmitter = require('events');
// console.log(typeof(EventEmitter));


// var eventEmitter =  new EventEmitter();
 
// var fun1 = (msg) => {
//     console.log("Message from fun1: " + msg);
// };
 
// var fun2 = (msg) => {
//     console.log("Message from fun2: " + msg);
// };

// eventEmitter.on('myEvent', fun1);
// eventEmitter.on('myEvent', fun1);
// eventEmitter.on('myEvent', fun2);
 
// eventEmitter.removeListener('myEvent', fun1);
 
// eventEmitter.emit('myEvent', "Event occurred");

// eventEmitter.removeAllListeners('myEvent');

// eventEmitter.emit('myEvent', "Event occurred");


//------------------Asynchronous event handle usinf setImediate--------------------//

// Importing events
const EventEmitter = require('events');

// Initializing event emitter instances 
var eventEmitter = new EventEmitter();

// Async function listening to myEvent
eventEmitter.on('myEvent', (msg) => {
    setImmediate( () => {
        console.log("Message from async: " + msg);
    });
});

// Declaring listener fun to myEvent
var fun = (msg) => {
    console.log("Message from fun: " + msg);
};

// Listening to myEvent with fun
eventEmitter.on('myEvent', fun);

// Triggering myEvent
eventEmitter.emit('myEvent', "Event occurred");