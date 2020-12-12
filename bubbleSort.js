function bubbleSrot(array) {
    const arr = array.slice(); // clone array
    if (arr.length <= 1) return arr;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1])
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]] // swap adjecent element
        }
    }
    return arr;
}

let array1 = [1, 12, 13, 56, 78, 53, 33, 68, 33, 78, 89, 44, 99, 1, 1000];
console.log(bubbleSrot(array1));
console.log(array1);
