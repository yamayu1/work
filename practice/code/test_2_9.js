 
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

    function heapSort(array){
        let array_size = array.length;
      
       for (let i = parseInt((array_size - 1) / 2); i >= 0; i--) {
         heap(array, i, array_size - 1);
       }
          let temp;
          for (let i = array_size - 1; i > 0; i--) {
            temp = array[0];
            array[0] = array[i];
            array[i] = temp;
            heap(array, 0, i - 1);
          }
          return array;
      }
      
      //ヒープの構築
      function heap(array,root,last){
          let child = 2 * root + 1;
          let temp = array[root];
          while (child <= last) {
              if (child < last && array[child + 1] > array[child]) {
                child = child + 1;
              }
              if (temp >= array[child]) {
                break;
              } else {
                array[parseInt((child - 1) / 2)] = array[child];
                child = 2 * child + 1;
              }
            }
            array[parseInt((child - 1) / 2)] = temp;
      }

const end = performance.now();
console.log(start - end);