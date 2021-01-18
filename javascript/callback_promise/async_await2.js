const readFile = require('./promise-read-files');

// #### Async/Await: ####
console.log('teste1');

async function functionAsync1() {
    console.log('await2');
    const contents = await readFile('./file1.txt');
    console.log('await3');
    console.log(String(contents));
}

async function functionAsync2() {
    console.log('await1');
    //functionAsync1();
    await functionAsync1();
    console.log('await4');
}

console.log('teste2');
functionAsync2();
console.log('teste1');