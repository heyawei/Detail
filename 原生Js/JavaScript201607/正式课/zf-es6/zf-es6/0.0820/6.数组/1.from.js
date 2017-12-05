let arr = [1, 2, 4];
//let arr2 = arr.slice(0);
let arr2 = Array.from(arr);
arr2.push(3);

console.log(arr, arr2);

let cc = document.querySelectorAll('.cc');
console.log(cc);
let ccArr = Array.from(cc);
console.log(Array.isArray(ccArr));
ccArr.filter(a => {
  console.log(a);
});