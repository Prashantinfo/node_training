const { spawn } = require('child_process');

const dir = spawn('cmd', ['/c', 'dir']); 

dir.stdout.on('data', (data) => {
    console.log(`Output:\n${data}`);
});

dir.stderr.on('data', (data) => {
    console.error(`Error:\n${data}`);
});

dir.on('close', (code) => {
    console.log(`Process exited with code ${code}`);
});


//--------------------------------//
const { exec } = require('child_process');

exec('node -v', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Stderr: ${stderr}`);
        return;
    }
    console.log(`Node.js version:\n${stdout}`);
});


//-----------------------------------------------//
const { execFile } = require('child_process');

execFile('node', ['-v'], (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Stderr: ${stderr}`);
        return;
    }
    console.log(`Node.js version:\n${stdout}`);
});


//-----------------------------------//

process.on('message', (data) => {
  console.log('Received from parent:', data);

 
  const result = `Hello, ${data.name}`;

  process.send({ message: result });
});
