/**
 * Created by Weil on 16/7/30.
 */
if (true) {
  var a = 'a';
}
var a = 'b';

if (true) {
  var a = 'c';
}

console.log(a, window.a);

for (var i = 0; i < 3; i++) {
  ;(function (i) {
    setTimeout(function () {
      console.log(i);
    })
  })(i);
}
//alert(i);