/**
 * Created by Weil on 16/4/16.
 */

let a = '1123';
let b = '4321';
let c = [1, 3];

let para = 'bcc';

let obj = {
  [para]: 123
};


let obj2 = {
  add () {
    return 123
  },

  add2: function () {

  }
};

function func () {
  return {a, b, c};
}

console.log(obj);