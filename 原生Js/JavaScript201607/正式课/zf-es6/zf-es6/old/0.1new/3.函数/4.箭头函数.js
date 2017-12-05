/**
 * Created by Weil on 16/4/9.
 */
// TypeScript

let func = function (a) {
  return a+1;
};

function aaa () {

}

let func2 = a => a+1;

let res1 = func(1);
let res2 = func2(2);

//console.log(res1, res2);

let arr = [1, 3, 5, 7];

//let involution = function (arr) {
//};

let r = arr.map(function (item, index, arr) {
  return item*item;
});

let r1 = arr.map(item => item*item);

console.log(r1);












