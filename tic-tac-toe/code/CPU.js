import { createRequire } from 'module';
const require = createRequire(import.meta.url);
// let array = [0,1,2];
//             [0,1,2];
//             [0,1,2];
        
// console.log(array[0,0],array[0,1],array[0,2]);
// console.log(array[1,0],array[1,1],array[1,2]);
// console.log(array[0,0],array[0,1],array[0,2]);

const readline = require('readline');

const readInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
readInterface.question("入力してください >",
        inputString=>{
            readInterface.close();
            console.log( `入力された文字：[${inputString }]`);
        });