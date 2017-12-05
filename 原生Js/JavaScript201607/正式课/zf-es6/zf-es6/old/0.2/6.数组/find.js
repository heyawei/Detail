/**
 * Created by Weil on 16/5/8.
 */

let arr = ['3', '6', '9'];

let mapRes = arr.map((item, index, arr) => {
  return item + 1;
});

let res = arr.find((value, i, array) => {
  debugger;
  return value == 3*3;
});

let res2 = arr.findIndex((value, i, array) => {
  return value == 3*3;
});

console.log(res, res2);