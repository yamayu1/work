
// const array = [1,2,3,4,5,6];

// for(let a = array.length-1; a >= 0; a--){
//     console.log(array[a]);
// }

// -----------------------------------------------------------
   
// const array = [1,2,3,4,5,6];
// let test_arr = [];
// let b = 0;
// for(let a = array.length-1; a >= 0; a--){
//     test_arr[b] = array[a];
//     b = b+1
// }
// console.log(test_arr);

// ------------------------------------------------------------

// const array = [1,2,3,4,5,6];
// let test_arr = [];

// for(let a = array.length-1; a >= 0; a--){
//     test_arr[(a-(array.length-1))*-1] = array[a];
// }
// console.log(test_arr);

// ------------------------------------------------------------

const array = [1,2,3,4,5,6];
let test_arr = [];

for(let a = array.length-1; a >= 0; a--){
    test_arr[array.length-1-a] = array[a];
}
console.log(test_arr);


