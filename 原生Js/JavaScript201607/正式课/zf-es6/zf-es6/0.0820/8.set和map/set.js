let arr = [11, 11, 22];
let set = new Set([1, 3, 3, 5]);

//let res1 = set.add(0);
//let res2 = set.delete(1);
//let res3 = set.has(3);
//let res4 = set.clear();

let keys = set.keys();
let values = set.values();
let entries = set.entries();

console.log(keys, values, entries);

//console.log(...entries);

//for ( let item of entries ) {
//  console.log(item);
//}

set.forEach((item, index, input) => {
  console.log(item);
});

//console.log(set.size);
//console.dir(set);
//console.log(res1, res2, res3, res4);