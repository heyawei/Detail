// Set 实现js中的集合运算
// 集合运算有三种 并集 交集 差集
let s1 = new Set([1, 3, 5, 7]);
let s2 = new Set([1, 4, 5, 8]);

// 并集合
let sb = new Set([...s1, ...s2]);
console.log(sb);

// 交集
//let arr2 = Array.from(s1);
let sj = new Set([...s1].filter(item => s2.has(item)));
console.log(sj);

// 差集
let cj = new Set([...s2].filter(item => !s1.has(item)));

console.log(cj);