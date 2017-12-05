/**
 * Created by Weil on 16/7/30.
 */
let name = 'xiaoming';
let age = 21;

let str = tmp`p${name}l${age}d`;

function tmp (strArr, ...other) {
  debugger;
  //console.log(arguments);
  console.log(strArr, other);
  return strArr[0] + other[1];
  //debugger;
}
console.log(str);