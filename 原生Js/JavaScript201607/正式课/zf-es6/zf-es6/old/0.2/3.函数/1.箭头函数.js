/**
 * Created by Weil on 16/5/6.
 */

let func = function () {

};

function func2 () {

}

// 箭头函数 只能声明匿名函数
let funcArrow = () => {
  console.log('im here');
};

let arr = [1, 2, 3];

let res1 = arr.map(function (item, i, arr) {
  return item * item;
});

let res = arr.map(item => item * item);

//funcArrow();

console.log(res);
