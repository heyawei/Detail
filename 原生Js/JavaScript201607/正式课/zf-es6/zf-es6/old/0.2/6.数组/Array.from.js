/**
 * Created by Weil on 16/5/8.
 */
// 数组的复制

let arr = [0, 1, 2];

let newArr = [];

//newArr = arr.slice(0);
newArr = Array.from(arr);

let div = document.querySelectorAll('div');
let divArr = Array.from(div);

arr.push(4);

console.log(newArr);