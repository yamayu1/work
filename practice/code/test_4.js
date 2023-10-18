
const array = [1,2,3,4,5,6];

let min = array[0];
for(let a= 0; a<array.length; a++){
    if(array[a]<min){
        min = array[a];
    }
}
console.log(min);


// const min = Math.min(...array)

// console.log(min);
