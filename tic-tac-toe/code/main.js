import { choiceError } from "./error.js";
import { PlayerChoice } from "./PlayerMove.js";
import { PlayerCoordinate } from "./PlayerMove.js";
// import { Win } from "./WinCheck.js";
import { stdin as input, stdout as output } from 'node:process';


const messageList = {select_turn:"先攻なら「0」,後攻なら「1」を入力してください > ",coordinate_x:"X列の座標を入力してください > ",
                     coordinate_y:"Y列の座標を入力してください > ",win:"Win",lose:"Lose",draw:"Draw"};
let mark = "";
let board = [
    ['  ','  ','  '],
    ['  ','  ','  '],
    ['  ','  ','  ']
];

let select_turn = await PlayerChoice(messageList,input,output,);

if(select_turn == '0'){
    mark = '🔴';
    }else{
    mark = '❌';
}

let select_coordinate = await PlayerCoordinate(messageList,input,output,board);
board[select_coordinate[0]][select_coordinate[1]] = mark; 
console.log(board);


// let winCheck  = Win(mark);

