console.log(1, 2, ...[3, 5]);
//console.log(1, 2, 3, 5);

let arr = [2, 64, 764, 212];
let max = Math.max.apply(null, arr);

consowle.log(max);

let max2 = Math.max(...arr);

console.log(max2);

let arr1 = [1, 2];
let arr2 = [4, 6];
let arrAll = arr1.concat(arr2);
let arrAll2 = [...arr1, ...arr2];
console.log(arrAll, arrAll2);