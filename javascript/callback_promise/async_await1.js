const fs = require('fs');
const readFile = require('./promise-read-files');

// #### Async/Await: ####
console.log('teste1');

async function functionAsync1() {
    console.log('await1');
    const contents = await readFile('./file1.txt');
    console.log(contents);
    console.log('await2');
    console.log('--------------------------------');
}

console.log('teste2');
functionAsync1();
console.log('teste3');