//乱数を生成関数を作る


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


const start = performance.now(); //開始時間

        for(let a = 0; a < array.length; a++){
            for(let b = 0;  b <(array.length-1 ) ; b++){
                if(array[b]>array[b+1]){
                    let keep = array[b];
                    array[b] = array[b+1];
                    array[b+1] = keep;
                }
            }
        }  

const end = performance.now();//終了時間
console.log(start - end);
// }

// console.log(start);

//時刻で差分を出す関数

//js標準のソートの時間も測定