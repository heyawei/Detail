/**
 * Created by Weil on 16/7/30.
 */
let arr = [
  1,
  {
    a: 'a',
    b: 'b',
    c: ['c1', 'c2', 'c3']
  }
  ,3
];

let [arr1, {a: myA, b: myB, c: [c1, c2, c3]}, arr2] = arr;

console.log(arr1, arr2, myA, myB, c1, c2, c3);