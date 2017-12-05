let arr = [1, 1, 3, 5, '6', 6, 123, 1];

arr = Array.from(new Set(arr));
//console.log(arr);

let set1 = new Set([1, 3, 5]);
let set2 = new Set([1, 2, 6]);

// 并集
let setb = new Set([...set1, ...set2]);
console.log(setb);

// 交集
let setj = Array.from(set1).filter(item => set2.has(item));

let arr2 = [];
set1.forEach(item => {
  if (set2.has(item)) {
    arr2.push(item);
  }
});
let set99 = new Set(arr2);
console.log(setj);

// 差集
let setc = Array.from(set2).filter(item => !set1.has(item));
console.log(setc);
