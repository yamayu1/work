
const array = [1,2,3,4,5,6,9,100];

let max = array[0];
for(let a= 0; a<array.length; a++){
    if(array[a]>max){
        max = array[a];
    }
}
console.log(max);


// // const max = Math.max(...array)
// // console.log(max);