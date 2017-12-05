/**
 * Created by Weil on 16/5/8.
 */
function A () {

}

A.prototype = {
  constructor: A,
  add: function () {
    console.log('a');
  },
  aaa: function () {

  }
};

Object.assign(A.prototype, {
  add: function () {
    console.log('b');
  }
});

let a = new A();

