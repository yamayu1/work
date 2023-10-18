export function makeRandomArray(n,length){
    let array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * n));
    }   
    return array;
}