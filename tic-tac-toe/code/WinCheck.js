//二次元配列使用 
//   0   1   2　X列
// 0 o | o | 
// 1   | o |
// 2   |   | o
//Y列

//8方向に探索するアルゴリズムもある、べたに書く
//定数にして切り出す（勝利メッセージ）何回も使用している。
//判定するのみの関数にする。（勝利だったら、ブーリアンで値を返す）


export function win(mark,board){  
     for (let i = 0; i < 3; i++) {
        if (board[i][0] === mark && board[i][1] === mark && board[i][2] === mark) {
          return true;
        }
      }
    
      // タテ方向を判定
      for (let i = 0; i < 3; i++) {
        if (board[0][i] === mark && board[1][i] === mark && board[2][i] === mark) {
          return true;
        }
      }
    
      // 右斜方向を判定
      if (board[0][0] === mark && board[1][1] === mark && board[2][2] === mark) {
        return true;
      }
    
      // 左斜方向を判定
      if (board[0][2] === mark && board[1][1] === mark && board[2][0] === mark) {
        return true;
      }
    
      return false;
}
