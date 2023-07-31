//取るマスの優先順位
//真ん中、角、その他空いている場所

export function CPU(board){
    if (board[1][1] === ' ') {
        let x = 1;
        let y = 1;
        return [x,y];
    }
      for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
          if (board[y][x] === ' ') {
            let a = x;
            let b = y;
            return [a,b];
          }
        }
      }
}
