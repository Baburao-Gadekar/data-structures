function quickSrot(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr.splice(arr.length - 1, 1)[0];
    const leftArr = [];
    const rightArr = [];

    for (const el of arr) {
        el < pivot ? leftArr.push(el) : rightArr.push(el)
    }
    return [...quickSrot(leftArr), pivot, ...quickSrot(rightArr)];

}

let array1 = [1, 12, 13, 56, 78, 53, 33, 68, 33, 78, 89, 44, 99, 1, 1000];
console.log(quickSrot(array1));
