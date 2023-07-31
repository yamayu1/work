
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

export function Error_coordinate(x,y,board){
    if (board[x][y] !== ' ') {
        const ErrorMessage = "すでに埋まってます。他のマスを選択してください！";
        return [true,ErrorMessage];
        }
    return[false,""]
}

export function choiceError(choice){
    if( choice === undefined || choice === null || choice !== "0" && choice !== "1"){
        const ErrorMessage = "「0」or「1」で入力してください。";
        return [true,ErrorMessage];
    }
    return[false,""]
}