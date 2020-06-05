const merge = (left, right) => {
    const final = [];

    while(left.length && right.length) {
        if(left[0] < right[0]) {
            final.push(left.shift());
            continue;
        }
        final.push(right.shift());
    }

    return [...final, ...left, ...right]
}


const mergeSort = arr => {
    if(arr.length < 2) {
        return arr;
    }

    const half = Math.floor(arr.length / 2)
    const left = arr.slice(0, half);
    const right = arr.slice(half);


    return merge(mergeSort(left), mergeSort(right));
}


console.log(mergeSort([10,5,3,8,2,6,4,7,9,1]))