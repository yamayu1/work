
const array = [1,1,1,1,];

let b = 'True'

for(let a = 0; a<array.length; a++){
    if(array[0] != array[a]){
        b = 'False';
    }
}

console.log(b);