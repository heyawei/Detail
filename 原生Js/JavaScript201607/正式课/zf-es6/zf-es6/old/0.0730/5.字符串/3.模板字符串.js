/**
 * Created by Weil on 16/7/30.
 */

let str = 'str';
let str2 = "str";


let name = 'xiaoming';
let getName = name => `Im ${name}`;


let str3 = `name:${getName('xiaoming')}`;
console.log(str3);

// 转义 ` $ { } \

let str4 = `\{\}`;
console.log(str4);
