const bubbleSort = (arr) => {
    let counter = 0;
    for (let i = 0; i<arr.length-counter; i++){
        if (arr[i] > arr[i+1]){
            swap(arr[i], arr[i+1])
        }
    }
}

const swap = (left, right) => {
    const temp = left;
    left = right;
    right = temp;
}