function insertionSort(arr){
    for(var i=0;i<arr.length;i++){
        var currentVal = arr[i];
        for(var j=i-1;j>=0 && arr[j] > currentVal; j--){
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentVal;
    }
    console.log(arr)
    return arr
}

insertionSort([1,7,3,5,2,9,1])