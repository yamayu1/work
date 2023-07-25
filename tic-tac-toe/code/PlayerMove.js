import { error } from "./error.js";
import { choiceError } from "./error.js";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

export function PlayerChoice(messageList){
    console.log(messageList["select_turn"]);

    const readline = require('readline');
    const readInterface = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    readInterface.question("入力してください >",
            inputString=>{
                const choice = inputString;
                readInterface.close();
                console.log( `入力された文字：[${inputString }]`);
               });
    const errorChoice = choiceError(choice);
    if(errorChoice[0] === true ){
        console.log(errorChoice[1]);
        return PlayerMove(messageList);
    }
    return[choice];
 }   

export function PlayerCoordinate(messageList,board){
    console.log(messageList["coordinate"]);

//入力するインターフェースが必要

    const x = parseInt(process.argv[2], 10);
    const y = parseInt(process.argv[3], 10);

    const Error = error(x,y,board);
    if(Error[0] === true ){
        console.log(Error[1]);
        return PlayerCoordinate(messageList);
    }
    return[x,y];
}