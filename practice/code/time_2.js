import { makeRandomArray } from "./random.js";
import { bubble } from "./test_2_2.js";
import { heapSort } from "./test_2_6.js";
import { mergeSort } from "./test_2_7.js";


let start;
let value;
let end;
let array;
let randomArray;
const n = 10000;
const length = 5000;

randomArray = makeRandomArray(n,length);//乱数の配列を生成
array = randomArray.sort();//昇順でソート
start = performance.now();//開始時間取得
value = bubble(array);//ソート開始
end = performance.now();//終了時間取得
const bubblesortTime = (end - start);//処理時間計算


randomArray = makeRandomArray(n,length);
array = randomArray.sort();
start = performance.now();
value = heapSort(array);
end = performance.now();
const heapSortTime = ( end - start);


randomArray = makeRandomArray(n,length);
array = randomArray.sort();
start = performance.now();
value = mergeSort(array);
end = performance.now();
const mergeSortTime = ( end - start);


randomArray = makeRandomArray(n,length);
array = randomArray.sort();
start = performance.now();
value = array.sort();
end = performance.now();
const SortTime = ( end - start);

console.log(bubblesortTime);
console.log(heapSortTime);
console.log(mergeSortTime);
console.log(SortTime);
