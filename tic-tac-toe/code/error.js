//座標の入力エラーを確認
export function Error_number(x,y){   
    if( x === undefined || x === null || x !== "0" && x !== "1" && x !== "2"){
        const ErrorMessage = "X列、Y列は0から2までの数字を入力してください";
        return [true,ErrorMessage];
    }
    if( y === undefined || y === null || y !== "0" && y !== "1" && y !== "2"){
        const ErrorMessage = "X列、Y列は0から2までの数字を入力してください";
        return [true,ErrorMessage];
    }
    return[false,""]
}

//選択した座標が空いている確認
export function Error_coordinate(x,y,board){
    if (board[y][x] !== ' ') {
        const ErrorMessage = "すでに埋まってます。他のマスを選択してください！";
        return [true,ErrorMessage];
        }
    return[false,""]
}

//先攻・後攻で「0」or「1」が入力されたか確認
export function choiceError(choice){
    if( choice === undefined || choice === null || choice !== "0" && choice !== "1"){
        const ErrorMessage = "「0」or「1」で入力してください。";
        return [true,ErrorMessage];
    }
    return[false,""]
}