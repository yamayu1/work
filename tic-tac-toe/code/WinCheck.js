//二次元配列使用 
//   0   1   2　X列
// 0 o | o | 
// 1   | o |
// 2   |   | o
//Y列

//8方向に探索するアルゴリズムもある、べたに書く
//定数にして切り出す（勝利メッセージ）何回も使用している。
//判定するのみの関数にする。（勝利だったら、ブーリアンで値を返す）


function win(mark){//関数名の変更
    // let mark = "";
    // //まるかバツかを取得
    // if( turn === first){
    //     mark = '⚫︎';
    // }else{
    //     mark = '✖️';
    // }

    //ヨコ方向を判定
    if(boart[0][0] && boart[0][1] && boart[0][2] == mark ){
        if(boart[1][0] && boart[1][1] && boart[1][2] == mark ){
            if(boart[2][0] && boart[2][1] && boart[2][2] == mark ){
            return true;
            }
        }
    }
    //タテ方向を判定
    if(boart[0][0] && boart[1][0] && boart[2][0] == mark ){
        if(boart[0][1] && boart[1][1] && boart[2][1] == mark ){
            if(boart[0][2] && boart[1][2] && boart[2][2] == mark ){
            return true;
            }
        }
    }
    //右斜方向を判定
    if(boart[0][0] && boart[1][1] && boart[2][2] == mark ){
        return true;
    }

    //左斜方向を判定
    if(boart[2][0] && boart[1][1] && boart[0][2] == mark ){
        return true;
    }
}
