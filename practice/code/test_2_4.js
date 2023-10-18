
const array = [4,1,3,6,0,8];

export function searchsort(array){
    const arr = array.length;
    const index = 8;

    for(let i = 0; i < arr; i++){
        if(array[i] == index){
            return i;
        }
    }
    return 'なし';
}

console.log(searchsort(array));