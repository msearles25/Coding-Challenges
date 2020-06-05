const bubbleSort = arr => {
    let swapped;
    do {
        swapped = false;
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] > arr[i+1]) {
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                swapped = true;
            }
        }
    } while(swapped);

    return arr;
}


console.log(bubbleSort([10,5,3,8,2,6,4,7,9,1]))