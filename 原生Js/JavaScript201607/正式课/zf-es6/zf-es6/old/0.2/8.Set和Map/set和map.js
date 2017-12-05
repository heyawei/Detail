/**
 * Created by Weil on 16/5/8.
 */

let div = document.querySelector('div');
let p = document.querySelector('p');
let obj = {i: 1}

let map = new Map([
  [div, {x: 123, y: 456}],
  [obj, {x: 1230, y: 4560}]
]);

map.has(div);

console.log(map);

let set = new Set([obj, obj, {}]);









