/*Readable Streams: Used to read data in chunks from a source.
Example: fs.createReadStream() for reading files.
Writable Streams: Used to write data in chunks to a destination.
Example: fs.createWriteStream() for writing files.
Duplex Streams: Can act as both Readable and Writable streams.
Example: net.Socket is a Duplex stream.
Transform Streams: A special kind of Duplex stream that can modify or transform the data as it is read and written.
Example: zlib.createGzip() for compressing data.*/

//---------Read file-----//
var fs = require('fs');

var readableStream = fs.createReadStream('example.txt', { encoding: 'utf8' });

readableStream.on('data', (chunk) => {
    console.log('Received chunk:', chunk);
});

readableStream.on('end', () => {
    console.log('Stream ended');
});

readableStream.on('error', (err) => {
    console.error('Stream error:', err);
});



//---------Write file-----//
var fs = require('fs');

var writableStream = fs.createWriteStream('output.txt');

writableStream.write('Hello, ');
writableStream.write('world!');
writableStream.end(' Goodbye!');

writableStream.on('finish', () => {
    console.log('Finished writing to the file');
});

writableStream.on('error', (err) => {
    console.error('Stream error:', err);
});

//----------------piping stream------------------//
var fs = require('fs');

var readableStream = fs.createReadStream('example.txt');
var writableStream = fs.createWriteStream('output.txt');

// Pipe readableStream to writableStream
readableStream.pipe(writableStream);


//----------Transform stream-------------------//
var { Transform } = require('stream');

var toUpperCase = new Transform({
    transform(chunk, encoding, callback) {
        callback(null, chunk.toString().toUpperCase());
    }
});

process.stdin.pipe(toUpperCase).pipe(process.stdout);

