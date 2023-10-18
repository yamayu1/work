 

let array = [];
const n = 10000;
const length = 5000;
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * n));
    }

    // array.sort();
    array.sort(function(a,b){
        return b-a;
      });

const start = performance.now();
array.sort();
const end = performance.now();


console.log(start - end);