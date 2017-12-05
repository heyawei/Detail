/**
 * Created by Weil on 16/7/30.
 */

if (true) {
  let a = 'a';
  console.log(a, '---1');
}
let a = 'b';

if (true) {
  let a = 'c';
  console.log(a, '---2');
}

console.log(a, '---3');

for (let i = 0; i < 2; i++) {
  for (let i = 0; i < 3; i++) {
    console.log(i);
  }
}