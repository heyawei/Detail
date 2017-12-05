/**
 * Created by Weil on 16/8/20.
 */
let arr = ['a', 'b', 'c'];

let item = arr.findIndex((item, idnex, input) => {
  return item === 'c';
});

console.log(item);