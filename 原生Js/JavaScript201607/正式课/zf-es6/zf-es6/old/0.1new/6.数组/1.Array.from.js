/**
 * Created by Weil on 16/4/16.
 */
// Array.from

// 把 类数组 转化为 数组
// 同时也可以复制数组 引用类型的问题
// 复制有 深拷贝 和 浅拷贝
let obj = {
  a: 'a',
  b: 'b'
};
let arr = [1, 2, 3, obj];

//let arr2 = arr.slice(0);

let arr2 = Array.from(arr);
obj.c = 'c';
arr[0] = 111;

//console.log(arr, arr2);

let bodyDom = document.querySelectorAll('body1');
let bodyArr = Array.from(bodyDom || []);









