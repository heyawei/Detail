/**
 * Created by Weil on 16/7/30.
 */
let add2 = function (a, b, isReturn) {
  //a = a || 0;
  //b = b || 0;
  //isReturn = isReturn || true;

  if (typeof a === 'undefined') {
    a = 0;
  }
  if (typeof b === 'undefined') {
    b = 0;
  }
  if (typeof isReturn === 'undefined') {
    isReturn = true;
  }

  console.log(a + b);

  if (isReturn) {
    return a + b;
  }
};

//let res = add(1, undefined, false);
//console.log(res);

let add = (a = 0, b = 0, isReturn = true) => {
  let res = a + b;
  console.log(res);
  if (isReturn) {
    return res;
  }
};
console.log(add(1, 2, undefined));

























