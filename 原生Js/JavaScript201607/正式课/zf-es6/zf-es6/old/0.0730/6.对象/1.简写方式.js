/**
 * Created by Weil on 16/7/30.
 */

let obj = {
  o: '123',
  'oo': 123,
  "ooo": "123",
  '<': '123312'
};
//console.log(obj);


//function func () {
//  let a = 'a';
//  let b = 'b';
//
//  return {a, b}
//}


let a = 'a';
let b = 'b';

let obj2 = {a, b};
console.log(obj2);

let objcOld = {
  add: function () {

  }
}

let objc = {
  add () {
    console.log('add');
  }
}

objc.add();



















