/**
 * Created by Weil on 16/7/30.
 */
let obj = {
  a: 'a',
  b: 'b'
};

//let a = obj.a;
//let b = obj.b;

let {a: a1, b, c: c1} = obj;

console.log(a1, b, a);