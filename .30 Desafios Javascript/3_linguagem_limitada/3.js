function reverseArray(arr, i=1) {
    const temp = arr[i-1];
    arr[i-1] = arr[arr.length - i];
    arr[arr.length - i] = temp;
    if (i != Math.round(arr.length/2)){
        return reverseArray(arr, i+1);
    } else {
        return arr;
    }
}

console.log(reverseArray([0, 9, 6, 8, 9, 1, 5, 7]));
console.log(reverseArray(["Oh", "Hi", "Mark"]));
console.log(reverseArray([false, true, true, true]));
console.log(reverseArray(["it's", "not", true, 0]));
