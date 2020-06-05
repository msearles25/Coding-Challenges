const insertionSort = arr => {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < i; j++) {
            if(arr[i] < arr[j]) {
                let s = arr.splice(i, 1);
                arr.splice(j, 0, s[0]);
            }
        }
    }
    return arr;
}

console.log(insertionSort([10,5,3,8,2,6,4,7,9,1]))