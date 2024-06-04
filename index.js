const app = require('./src/config/express');

const args = process.argv.slice(2); // Get command-line arguments
const param = args[0]; // Assume the first argument is the parameter

console.log(param, '///////////////////////////////////');
