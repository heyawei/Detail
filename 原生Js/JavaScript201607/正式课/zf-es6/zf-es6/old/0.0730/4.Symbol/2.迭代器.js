let arr = [1, 2, 3];
//console.log(...arr);
//console.log(arr[Symbol.iterator]);

let obj = {a: 'a', b: 'b',0: 'a', 1: 'b', length: 2};
obj[Symbol.iterator] = Array.prototype[Symbol.iterator];
console.log(obj[Symbol.iterator]);
console.log(...obj, '----');