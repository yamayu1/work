
let fib = [0,1];

for(let b = 2; b < 15; b++){
    fib[b] = fib[b-1] + fib[b-2];
}
 console.log(fib);