//二次元配列使用 
//   0   1   2　X列
// 0 o | o | 
// 1   | o |
// 2   |   | o
//Y列

//8方向に探索するアルゴリズムもある、べたに書く
//定数にして切り出す（勝利メッセージ）何回も使用している。
//判定するのみの関数にする。（勝利だったら、ブーリアンで値を返す）


function win(turn){//関数名の変更
    let count = 0;
    let mark = "";
    //まるかバツかを取得
    if( turn === first){
        mark = '⚫︎';
    }else{
        mark = '✖️';
    }
    //ヨコ方向を判定
    for(let y = 0; y < 3; y++){
        for(let x = 0; x < 3; x++){
            if(boart[x][y] == mark ){
                count++;
            }
        }
        if(count == 3){
            if(mark === '⚫︎'){
                const judgement = '先行の勝利';
                return judgement;
            }else{
                const judgement = '後攻の勝利';
                return judgement;
            }
        }
    }
    //タテ方向を判定
    count = 0;
    for(let x = 0; x < 3; x++){
        for(let y = 0; y < 3; y++){
            if(boart[x][y] == mark ){
                count++;
            }
        }
        if(count == 3){
            if(mark = '⚫︎'){
                const judgement = '先行の勝利';
                return judgement;
            }else{
                const judgement = '後攻の勝利';
                return judgement;
            }
        }
    }
    //右斜方向を判定
    count = 0;
    for(let xy = 0; xy < 3; xy++){
        if(boart[xy][xy] == mark ){
            count++;
        }
    }
    if(count == 3){
        if(mark = '⚫︎'){
            const judgement = '先行の勝利';
            return judgement;
        }else{
            const judgement = '後攻の勝利';
            return judgement;
        }
    }
    //左斜方向を判定
    count = 0;
    for(let xy = 2; xy >= 0; xy--){
        if(boart[xy][xy] == mark ){
            count++;
        }
    }
    if(count == 3){
        if(mark = '⚫︎'){
            const judgement = '先行の勝利';
            return judgement;
        }else{
            const judgement = '後攻の勝利';
            return judgement;
        }
    }
    
    //マスが埋まったかどうかのみを確認する関数にする。
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
