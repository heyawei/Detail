/**
 * Created by Weil on 16/4/16.
 */

//let obj = {a: 'a'};
//var s = new Set([1, 'str', obj, obj, NaN, NaN, +1, -1, {}, {}, null, null, undefined, undefined]);
//
//console.log(s, s.size, s.length);
//
//s.add(null);
//s.delete(obj);
//s.has(obj);
//let res = s.clear();

//let ents = s.keys();
//
//console.log(s.entries());
//
//for (let item of ents) {
//  console.log(item);
//}


// 拓展运算符号 ... 是使用了for of的遍历方式
//let set = new Set(['a', 'b', 'c', 'a']);
//let arr = [...set];
//console.log(arr);

let arr = [1, 2, 2, 4, 6, 1, 3, obj];

// 数组去重

// 1.把数组放到set里
// 2.set会自动去重
// 3.把set再放回数组里

//let set = new ;

arr = Array.from(new Set(arr));

console.log(arr);






