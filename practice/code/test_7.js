
const array = [1, 2, 3, true, false, "xx", "dff"];

// // console.log(typeof(array[2]));
// // console.log(typeof(array[3]));
// // console.log(typeof(array[5]));

let sum = 0;

for(let a = 0; a < array.length; a++){
    if(typeof array[a] === 'number'){
        sum = sum + array[a];
    }
}
console.log(sum);
