/**
 * Created by Weil on 16/5/6.
 */
let obj = {
  a: 'a',
  b: 'b',
  c: 'c',
  arr: [1, 2],
  cobj: {
    u: 'u'
  }
};

//let one
//let two
//let para

let {a: ax, b, arr: [one, two], cobj: {u: para}} = obj;

/*let a = obj.a;
let b = obj.b;
let c = obj.c;*/

console.log(ax, b, one, two, para);
















