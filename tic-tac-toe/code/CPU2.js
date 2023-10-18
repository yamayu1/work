import { win } from "./WinCheck.js";

// function emptyboard(board) {
//     let emptyCells = [];
//     for (let i = 0; i < board.length; i++) {
//       for (let j = 0; j < board[i].length; j++) {
//         if (board[i][j] === ' ') {
//           emptyCells.push([i,j]);
//         }
//       }
//     }
//     return emptyCells;
//   }

// export function minmax(playermark,board){

//   function emptyboard(board) {
//     let emptyCells = [];
//     for (let i = 0; i < board.length; i++) {
//       for (let j = 0; j < board[i].length; j++) {
//         if (board[i][j] === ' ') {
//           emptyCells.push([i,j]);
//         }
//       }
//     }
//     return emptyCells;
//   }

//   let scores = {};
//   let bestpositions = {};
//   let emptyCells = emptyboard(board);
//   let player;
//   let CPUplayer;
  
//   if(playermark === '○'){
//     player = '×';
//     CPUplayer = '○';
//   }else{
//      player = '○';
//      CPUplayer = '×';
//   }

//   if (playermark == CPUplayer) {
//     bestpositions.score = -1000;
//   } else {
//     bestpositions.score = 1000;
//   }

//   if (win(player, board)) {
//     return  { score: -10 };
//   } else if (win(CPUplayer, board)) {
//     return  { score: 10 };
//   } else if (emptyCells.length === 0) {
//     return { score: 0 };
//   }

//   emptyCells.forEach(function (cell) {
//     board[cell[0]][cell[1]] = playermark;
//     if (playermark === '○') {
//       scores = minmax('×', board);
//     } else {
//       scores = minmax('○',board );
//     }
//     board[cell[0]][cell[1]] = ' ';
//     scores.index = { row: cell[0], col: cell[1] };

//     if ( playermark === CPUplayer) {
//       if (scores.score > bestpositions.score) {
//         bestpositions = scores;
//       }
//     } else {
//       if (scores.score < bestpositions.score) {
//         bestpositions = scores;
//       }
//     }
//   });

//   return bestpositions;
// }

