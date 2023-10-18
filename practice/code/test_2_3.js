
// const array = [5,2,7,6,4,3,1,13,21,12];//11個の配列

// let bucket = [];
// let c = 0;

// for(let a = 0; a < array.length; a++){
//     bucket[array[a]] = array[a];
// }

// for(let b = 0; b < bucket.length; b++){
//     if(typeof bucket[b] == 'number' ){
//         array[b] = bucket[b];
//         c += 1;
        
//     }
// }
// cnsole.log(array);




// public static void BucketSort(int[] a, int max)
// {
//   // バケツを用意（空の配列をマックス＋１個分用意する）
//   int[] bucket = new int[max + 1];

//   // バケツに値を入れる(バケツの中に同じ数字を入れるから、何個入るか１＋＋しながら数え得てる)
//   for (int i = 0; i < a.Length; ++i) ++bucket[a[i]];

//   // バケツ中の値の結合
//   for (int j = 0, i = 0; j < bucket.Length; ++j)
//     for (int k = bucket[j]; k != 0; --k, ++i)
//                 //bucketの中に入っている数字の個数
//       a[i] = j;

//０番目の数字があったほうがいい

// const array = [1,5,7,4,6,9,7,6,-3];

export function bucketsort(array){
  let bucket = Array(Math.max(...array) + 1).fill(0);
  for(let a = 0; a < array.length; a++)
  bucket[array[a]]+= 1;
  for (let j = 0, i = 0; j < bucket.length; ++j){
    for (let k = bucket[j]; k != 0; --k, ++i){
      array[i] = j;
    }
  } 
  return array;
}

// bucketSort(array);
// console.log(array);


