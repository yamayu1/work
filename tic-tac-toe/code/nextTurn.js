//ターンを交換する（マークを入れ変える）
export function nextTurn(mark){
    let nextmark = "";
    if(mark === '○'){
        nextmark = '×'; 
    }else{
        nextmark = '○';
    }
    return nextmark;
}