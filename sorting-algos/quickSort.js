const quickSort = arr => {
    if(arr.length <= 1) return arr;

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i]);
            continue;
        }
        right.push(arr[i]);
    }


    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([10, 8, 2, 1, 6, 3, 9, 4, 7, 5]))