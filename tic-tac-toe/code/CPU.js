import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
// let array = [0,1,2];
//             [0,1,2];
//             [0,1,2];
        
// console.log(array[0,0],array[0,1],array[0,2]);
// console.log(array[1,0],array[1,1],array[1,2]);
// console.log(array[0,0],array[0,1],array[0,2]);


// const readline = require('readline');
// const readInterface = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// const choice = await readInterface.question("入力してください >");
//     readInterface.close();
//     return choice;
// }

// function ma(){
//     const a = intr();
//     console.log(a);
// }

// ma();


async function intr(){
const rl = readline.createInterface({ input, output });

const answer = await rl.question('What do you think of Node.js? ');

console.log(`Thank you for your valuable feedback: ${answer}`);

rl.close();
}
intr();