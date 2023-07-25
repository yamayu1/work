
export function error(x,y,board){   
    if((x !== 0 && x !== 2 && x !== 3) || (y !== 1 && y !== 2 && y !== 3)){
        const ErrorMessage = "正しい数字で入力してください";
        return [true,ErrorMessage];
    }
    if (board[x][y] != '') {
        const ErrorMessage = "すでに埋まってます。他のマスを選択してください！";
        return [true,ErrorMessage];
    }
    return[false,""]
}

//以上と以下で作成
//エラーメッセージも定数に変更

export function choiceError(choice){
    if(choice !== 0 || choice !== 1){
        const ErrorMessage = "「0」or「1」で入力してください。";
        return [true,ErrorMessage];
    }
    return[false,""]
}