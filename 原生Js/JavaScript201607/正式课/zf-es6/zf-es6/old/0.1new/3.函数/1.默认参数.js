/**
 * Created by Weil on 16/4/9.
 */
// TypeScript
function add (x = 0, y = 0) {
  // 语法糖
  //if (!y) {
  //  y = 0;
  //}
  //y || (y = 0);
  //
  //if (typeof y === 'undefined') {
  //  y = 0;
  //}

  return x + y;
}

let res = add('dsdfs', undefined);
console.log(res);





