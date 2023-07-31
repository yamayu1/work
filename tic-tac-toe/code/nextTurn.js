
export function nextTurn(mark){
    let nextmark = "";
    if(mark === '○'){
        nextmark = '×'; 
    }else{
        nextmark = '○';
    }
    return nextmark;
}