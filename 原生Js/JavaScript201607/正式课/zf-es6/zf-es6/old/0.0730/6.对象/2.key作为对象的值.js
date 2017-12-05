/**
 * Created by Weil on 16/7/30.
 */

let prop = 'name';

function add () {
  return 'kkk'
}

let obj = {
  [add()]: 'xiaoming'
};
//obj[prop] = 'xiaoming';
console.log(obj);