/**
 * Created by Weil on 16/4/9.
 */
// 解构赋值 变量的批量赋值
'use strict';

// 解构赋值 把右侧的 数据类型 赋值到 左侧 构造 的 相似的 数据类型 中

let obj = {
  a: 'a',
  b: 'b',
  c: 'c',
  arr: [1, 2, 3]
};

let {a: mya, b, c: myc, arr: [, , x, {}]} = obj;
//let {x, y, z} = obj;

//x = obj.x;
//y = obj.y;
//z = obj.z;

let x1 = obj.arr[2];

console.log(mya, b, myc, x, x1);













