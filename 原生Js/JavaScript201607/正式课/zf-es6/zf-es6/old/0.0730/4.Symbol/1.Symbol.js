/**
 * Created by Weil on 16/7/30.
 */

let a = Symbol('a');
let a1 = Symbol('a');

let obj = {};
obj[a] = 123;
obj[Symbol('a')] = 666;
obj.a = 555;

console.log(a, a1, a == a1);
console.log(obj);
console.dir(obj);

