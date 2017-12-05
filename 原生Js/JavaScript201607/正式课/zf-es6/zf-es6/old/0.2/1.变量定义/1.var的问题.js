/**
 * Created by Weil on 16/5/6.
 */
'use strict';

for (var i = 0; i < 3; i++) {
  ;(function (i) {
    setTimeout(function () {
      //console.log(i);
    }, 0);
  })(i);
}

for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    //console.log(i);
  }, 0);
}

if (true) {
  let a = 'a';
  console.log(a, 'before');
}

let obj = {};

//console.log(a, 'after');

;(function () {

})();

~function(){
  console.log('bibao');
}();

{

}

console.log(b);
let b = 'b ';

















