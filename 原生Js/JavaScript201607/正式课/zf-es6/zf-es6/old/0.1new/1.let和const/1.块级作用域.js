/**
 * Created by Weil on 16/4/9.
 */
for (var i = 0; i < 3; i++) {
  ;(function (i) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  })(i);
}

for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}