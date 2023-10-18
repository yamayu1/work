import { makeRandomArray } from "./random.js";
import { bubble } from "./test_2_2.js";
import { heapSort } from "./test_2_6.js";
import { mergeSort } from "./test_2_7.js";


let start;
let value;
let end;
let array;
const n = 10000;
const length = 5000;

array = makeRandomArray(n,length);//乱数の配列を生成
start = performance.now();//開始時間取得
value = bubble(array);//ソート開始
end = performance.now();//終了時間取得
const bubblesortTime = (end - start);//処理時間を計算


array = makeRandomArray(n,length);
start = performance.now();
value = heapSort(array);
end = performance.now();
const heapSortTime = ( end - start);


array = makeRandomArray(n,length);
start = performance.now();
value = mergeSort(array);
end = performance.now();
const mergeSortTime = ( end - start);


array = makeRandomArray(n,length);
start = performance.now();
value = array.sort();
end = performance.now();
const SortTime = ( end - start);

console.log(bubblesortTime);
console.log(heapSortTime);
console.log(mergeSortTime);
console.log(SortTime);

//乱数を生成関数を作る
//時刻で差分を出す関数
//js標準のソートの時間も測定