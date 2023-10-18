
const array = [1, 2, 3, 4, 5, 6];

let test_array = [];

for(let a = 0; a<array.length; a++){
    if(array[a] %2 === 0 ){
        array[a] = 'true';
    }else{
        array[a] = 'false';
    }
}

console.log(array);