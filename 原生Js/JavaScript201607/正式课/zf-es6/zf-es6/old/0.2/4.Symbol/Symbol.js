/**
 * Created by Weil on 16/5/7.
 */
'use strict';
// 定义Symbol

let syb = Symbol('syb');
let syb2 = Symbol('syb22222');

console.log(syb == syb2);

let obj = {
  a: 'a',
  'b': 'b'
};

obj[syb] = 'doc';

console.log(obj, syb.toString(), syb2.toString());