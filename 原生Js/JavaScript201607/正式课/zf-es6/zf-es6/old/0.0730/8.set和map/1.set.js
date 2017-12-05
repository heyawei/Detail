/**
 * Created by Weil on 16/7/30.
 */
//let set = new Set([1, 1, 3, 4]);

let arr = [1, 1, 3, 4];

let newArr = Array.from(new Set(arr));
//console.log(newArr);

let set = new Set([1, 3, 5, 5, 7]);
//console.log(set);
//let res1 = set.add(9);
//let res2 = set.delete(1);
//let res3 = set.has(3);
//let res4 = set.clear();
//console.log(res1, res2, res3, res4);
//console.log(set);

//set.forEach((value, i, s) => {
//  console.log(value, i, s);
//});

let keys = set.keys();
let values = set.values();
let entries = set.entries();
//console.log(keys, values, entries);
//
//for (let val of entries) {
//  console.log(val);
//}

//for (let i = 0, len = set.size; i < len; i++) {
//  console.log(set[i]);
//}
//console.log(set.size);

// 用法
let set1 = new Set([1, 3, 5]);
let set2 = new Set([1, 2, 5]);

// 并集
let bSet = new Set([...set1, ...set2]);
console.log(bSet);

// 交集 set1有 set2有
let jSet = new Set(Array.from(set1).filter(value => set2.has(value)));
console.log(jSet);

// 差集
let cSet = new Set(Array.from(set1).filter(value => !set2.has(value)));
console.log(cSet);



















