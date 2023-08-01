import { CPU } from "./CPU.js";
import { PlayerChoice } from "./PlayerMove.js";
import { PlayerCoordinate } from "./PlayerMove.js";
import { win } from "./WinCheck.js";
import { draw } from "./DrawCheck.js";
import { stdin as input, stdout as output } from 'node:process';
import { nextTurn } from "./nextTurn.js";

const messageList = {
    select_turn: "先攻なら「0」,後攻なら「1」を入力してください > ", coordinate_x: "X列の座標を入力してください > ",
    coordinate_y: "Y列の座標を入力してください > ", win: "Win", lose: "Lose", draw: "Draw"
};
let mark = "";
let winCheck = "";
let drawCheck = "";
let trueChange = "";

let board = [
    [' ',' ',' '],
    [' ',' ',' '],
    [' ',' ',' ']
];


//先攻・後攻を選択
let select_turn = await PlayerChoice(messageList, input, output);
if (select_turn === '0') {
    mark = '○';
} else {
    mark = '×';
}
console.log(board.join('\n'));


while (true) {
    //後攻の場合、プレイヤーのターンをスキップ
    if(select_turn === '0' || select_turn === ""){
        select_turn = "";

    //プレイヤーターン
        let select_coordinate = await PlayerCoordinate(messageList, input, output, board);
        board[select_coordinate[1]][select_coordinate[0]] = mark;
        console.log(board.join('\n'));

    //勝敗確認
        winCheck = win(mark, board);
        if (winCheck === true) {
            console.log(messageList["win"]);
            break;
        }

    //ドローの確認
        drawCheck = draw(board);
        if (drawCheck === true) {
            console.log(messageList["draw"]);
            break;
        }

    //ターンを交代
        trueChange = nextTurn(mark);
        mark = trueChange;
    }

    //CPUのターン
    select_turn = "";
    console.log("CPUのターンです。");
    let cpuMove = CPU(board);
    board[cpuMove[1]][cpuMove[0]] = mark;
    console.log(board.join('\n'));

    //勝敗確認
    winCheck = win(mark, board);
    if (winCheck === true) {
        console.log(messageList["lose"]);
        break;
    }

    //ドローの確認
    drawCheck = draw(board);
    if (drawCheck === true) {
        console.log(messageList["draw"]);
        break;
    }

    //ターンを交換
    trueChange = nextTurn(mark);
    mark = trueChange;
}
