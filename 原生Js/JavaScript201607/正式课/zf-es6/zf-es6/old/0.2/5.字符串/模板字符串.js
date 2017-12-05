/**
 * Created by Weil on 16/5/7.
 */
let oldStr = '12"3';
let oldStr2 = "12'3-2";

let abc = '---abc---';

function func () {
  return '----0000000----';
}

let newStr = `3123321" ${func()}''""'"'`;

let newStr2 = `\`\$\{\}`;

console.log(oldStr);
console.log(oldStr2);
console.log(newStr);
console.log(newStr2);