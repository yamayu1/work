
//マスが埋まったかどうかのみを確認する
function draw(board){
    for (let x = 0; x < 3; x++){
        for (let y = 0; y < 3; y++) {
            if (board[x][y] == ' ') {
                return false;
        }else{
        return true;     
        }
    }
    return nextTurn;
    }
}