
export function mergeSort(array){
    if (array.length == 1){
        return array;
    }

    const center = Math.floor(array.length / 2);
    const left = array.slice(0, center);
    const right = array.slice(center);

    return marge(mergeSort(left), mergeSort(right));
}

function marge(left,right){
    let result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length){
        if(left[i] <= right[j]){
            result.push(left[i]);
            i++;
        }else{
            result.push(right[j]);
            j++;
        }
    }
    while (i < left.length) {
        result.push(left[i]);
        i++;
      }
      while (j < right.length) {
        result.push(right[j]);
        j++;
      }
      return result; 
}

// const array = [6, 15, 4, 2, 8, 5, 11, 9, 7, 13];
// const sortedArray = mergeSort(array);
// console.log(sortedArray);