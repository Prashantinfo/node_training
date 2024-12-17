const { Buffer } = require('node:buffer');

const a=  Buffer.alloc(100);
a.write("hello")

console.log(a.toString());
