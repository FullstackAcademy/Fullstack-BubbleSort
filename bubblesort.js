function defaultComparison (a, b) {
  return a - b
}
const bubbleSort = (arr, comparison=defaultComparison) => {
    let counter = 0;
    let swaps = true
    while(swaps){
        swaps = false
        for (let i = 0; i<(arr.length-counter); i++){
            if (comparison(arr[i],arr[i+1]) > 0){
            arr = swap(arr,i,i+1)
            swaps = true
            }
        }
        counter++
    }
    return arr
}
function swap(arr,leftIndex,rightIndex) {
    const temp1 = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = temp1;
    return arr
}
