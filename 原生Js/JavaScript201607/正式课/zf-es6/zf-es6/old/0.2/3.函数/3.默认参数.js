/**
 * Created by Weil on 16/5/6.
 */

function ajax (method = 'get', ...other) {
  //console.log(method, data, url, isCache, success);
  console.log(method, ...other, other);
}

ajax(undefined, 'data', 'url', 'isCache', 'success');

let arr = [1, 4, 7342, 712, 2112];

let max = Math.max.apply(null, arr);
let max2 = Math.max(...arr);
let max3 = Math.max(1, 4, 7342, 712, 2112);


console.log(max, max2, max3);

//let max = arr[0];
//let maxTwo = arr[1];
//
//for (var i = 0; i < arr.length; i++) {
//  if (maxTwo < arr[i]) {
//    maxTwo = arr[i];
//    if (max < arr[i]) {
//      maxTwo = max;
//      max = arr[i];
//    }
//  }
//}

let a = [1, 2];
let a1 = [2, 3];
let a2 = [];

//a2 = a.concat(a1);
a2 = [...a, ...a1];
console.log(a2);








