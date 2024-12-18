//----------------Read file(async)--------------------//
// const fs = require('fs');

// const a=fs.readFile('output.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });
// console.log(typeof(a));


//---------------read file (sync)-------------------------//
// const fs = require('fs');

// try {
//     const data = fs.readFileSync('output.txt', 'utf8');
//     console.log(data);
// } catch (err) {
//     console.error('Error reading file:', err);
// }


//----------------------write file(async)-----------------//
// const fs = require('fs');

// fs.writeFile('output.txt', 'Hello, World!', (err) => {
//     if (err) throw err;
//     console.log('File has been saved!');
// });


//--------------------write file(sync)--------------------//
// const fs = require('fs');

// try {
//     fs.writeFileSync('output.txt', 'Hello, World!');
//     console.log('File has been saved!');
// } catch (err) {
//     console.error('Error writing file:', err);
// }


//----------------Append content to file(async)--------------------//
// const fs = require('fs');

// fs.appendFile('output.txt', '\nNew content added!', (err) => {
//     if (err) throw err;
//     console.log('Content appended!');
// });


//-----------------Delete file--------------------//

const fs = require('fs');

fs.unlink('output.txt', (err) => {
    if (err) throw err;
    console.log('File deleted!');
});




