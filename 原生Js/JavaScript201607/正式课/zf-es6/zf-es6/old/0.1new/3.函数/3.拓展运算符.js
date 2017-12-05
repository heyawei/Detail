/**
 * Created by Weil on 16/4/9.
 */
// TypeScript

function add (a, ...arg) {
  //debugger;
  let res = 0;
  res += a;
  for (let i = arg.length-1; i >= 0; i--) {
    res += arg[i];
  }
  return res;
}

let res = add(1, 3, 4, 5);
//console.log(res);

// 求最大值
let arr = [3, 61, 3, 6];

//let m = Math.max.apply(null, arr);
let m = Math.max(...arr);
console.log(m);















