let arr = [1, 2, 4];

let arr2 = [0, ...arr, 7];

//console.log(...arr);
//console.log(arr);
console.log(arr2);

let a = [1, 3, 5];
let b = [2, 4, 6];
console.log(a.concat(b));
console.log([...a,...b]);

let max = Math.max.apply(null, a);
console.log(max);

let max2 = Math.max(...a);
console.log(max2);