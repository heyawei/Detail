/**
 * Created by Weil on 16/7/30.
 */
let arr = [1, 2, 3];

let arr2 = arr.slice(0);

let arr3 = Array.from(arr);

console.log(arr === arr3);
console.log(arr, arr2, arr3);