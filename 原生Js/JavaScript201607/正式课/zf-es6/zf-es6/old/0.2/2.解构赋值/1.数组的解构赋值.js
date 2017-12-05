/**
 * Created by Weil on 16/5/6.
 */
let arr = ['a', 'b', 'c', ['d1', 'd2']];

//let a = 'a';
//let b = 'b';
//let c = 'c';

// 左边构造一个和数组数据解构相似的东西
let [ ,  ,  , [d1, d2], m] = arr;

// 等同于上面的写法,一点区别都没有
//let a = arr[0];
//let b = arr[1];
//let c = arr[2];
console.log(d1, d2, m);
//console.log(a, b, c, d1, d2, m);

/*let nums = [1, 2, 3, 4, 5, 6];

let [n1, ...other] = nums;

console.log(n1, other);*/
















