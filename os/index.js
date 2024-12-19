/*.arch(): Returns the CPU architecture of the operating system (e.g., ‘x64’, ‘arm’).
os.cpus(): Provides an array of objects describing each CPU/core installed.
os.freemem(): Returns the amount of free system memory in bytes.
os.homedir(): Returns the path to the current user’s home directory.
os.hostname(): Returns the hostname of the operating system.
os.networkInterfaces(): Returns a list of network interfaces and their details.
os.platform(): Returns the operating system platform (e.g., ‘linux’, ‘darwin’).
os.release(): Returns the operating system release.
os.totalmem(): Returns the total amount of system memory in bytes.
os.uptime(): Returns the system uptime in seconds. */

// Include os module and create its object
const os = require('os');

// return the cpu architecture
console.log("CPU architecture: " + os.arch());

// It returns the amount of free system memory in bytes
console.log("Free memory: " + os.freemem());

// It return total amount of system memory in bytes
console.log("Total memory: " + os.totalmem());

// It returns the list of network interfaces
console.log('List of network Interfaces: ' + os.networkInterfaces());

// It returns the operating systems default directory for temp files.
console.log('OS default directory for temp files : ' + os.tmpdir());