import { PlayerCoordinate } from "./PlayerMove.js";
import { PlayerChoice } from "./PlayerMove.js";
// import { Win } from "./WinCheck.js";

const messageList = {select_turn:"先攻なら「0」,後攻なら「1」を入力してください。",coordinate:"座標を入力してください",win:"Win",lose:"Lose",draw:"Draw"};
let mark = "";
let board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

let choice = PlayerChoice(messageList);
if(choice == 0){
    mark = '⚫︎';
    }else{
    mark = '✖️';
}

let coordinate = PlayerCoordinate(messageList,board);
board[coordinate[0]][coordinate[1]] = mark;

console.log(board);

let winCheck  = Win(mark);

