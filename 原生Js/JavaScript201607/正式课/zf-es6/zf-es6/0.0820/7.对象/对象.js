// Object.assign
let obj1 = {x: 'x'};
let obj2 = {y: 'y', x: 'x123321312'};
let obj3 = {x: 'x2'};

let obj4 = Object.assign(obj1, obj2, obj3);
console.log(obj1, obj2, obj3, obj4, obj1 === obj4);