


export function bubble(array){
    for(let a = 0; a < array.length; a++){
        for(let b = 0;  b <(array.length-1 ) ; b++){
            if(array[b]>array[b+1]){
                let keep = array[b];
                array[b] = array[b+1];
                array[b+1] = keep;
            }
        }
    }  
    return array;
}
// if(array[b]>array[a+1]){
//     keep = array[a];
//     array[a] = array[a+1];
//     array[a+1] = keep;
// }


