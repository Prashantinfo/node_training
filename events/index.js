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

eventEmitter.on('myEvent', (msg) => {
    setImmediate( () => {
        console.log("Message from async: " + msg);
    });
});

var fun = (msg) => {
    console.log("Message from fun: " + msg);
};

eventEmitter.on('myEvent', fun);

eventEmitter.emit('myEvent', "Event occurred");