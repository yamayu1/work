//取るマスの優先順位

//真ん中を取得
export function CPU(board){
  if (board[1][1] === ' ') {
      return [1,1];
  }

  //角を取得
  const cornersCoordinate = [
    [0, 0], [0, 2],
    [2, 0], [2, 2]
  ];
  for (let [x, y] of cornersCoordinate){
    if (board[y][x] === ' ') {
      return [x, y];
    }
  }

  //真ん中、角以外の場所を取得
  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      if (board[y][x] === ' ') {
        return [x,y];
      }
    }
  }
} 
