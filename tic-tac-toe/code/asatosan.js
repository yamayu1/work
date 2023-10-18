function emptyboard(board) {
    let emptyCells = [];
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === ' ') {
          emptyCells.push([i,j]);
        }
      }
    }
   return emptyCells; 
}

// def minimax(game, depth, piece)
function minmax(playermark,board){

// return evaluate(game, depth) if game.game_over?

// depth += 1

let scores = [];
let positions = [];
// scores = []     # 点数を格納する配列
// positions = []  # 座標[row,col]を格納する配列

// 3.times do |row|
//   3.times do |col|
//     next unless game.can_place_piece?(row, col)

//     possible_game = game.copy_game
//     piece = get_current_piece(depth)
//     possible_game.put_piece(row, col, piece)
//     scores << minimax(possible_game, depth, piece)
//     positions << [row, col]
//   end
// end

// # depth(ゲームツリーの深さ)が奇数だったら、ミニマックスの順番とみなす
// if depth.odd?
//   max_score_index = scores.each_with_index.max[1]
//   @best_positon = positions[max_score_index]
//   scores[max_score_index]
// else
//   min_score_index = scores.each_with_index.min[1]
//   @best_position = positions[min_score_index]
//   scores[min_score_index]
// end
// end

// def get_current_piece(depth)
// if depth.odd?
//   PIECE_X
// else
//   PIECE_O
// end
// end

// # 評価関数(scores配列に点数を返す)
// def evaluate(game, depth)
// if game.win?(PIECE_X)
//   10 - depth
// elsif game.win?(PIECE_O)
//   depth - 10
// else
//   0
// end
// end
return bestposition;
}