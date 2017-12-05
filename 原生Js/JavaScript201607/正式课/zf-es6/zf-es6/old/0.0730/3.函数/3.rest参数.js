/**
 * Created by Weil on 16/7/30.
 */
//let addAll = function () {
//  let res = null;
//  let args = Array.prototype.slice.call(arguments);
//  /*debugger;
//  for (let i = 0, len = arguments.length; i < len; i++) {
//    res += arguments[i];
//  }*/
//
//  args.forEach(value => res += value);
//  console.log(res);
//};
//
//addAll(1, 2, 3);

let addAll = (isReturn, ...values) => {
  debugger;
  console.log(values);
  let res = null;
  values.forEach(val => res += val);
  console.log(res);
  if (isReturn) {
    return res;
  }
};


let res = addAll(false, 1, 3);
console.log(res);

























