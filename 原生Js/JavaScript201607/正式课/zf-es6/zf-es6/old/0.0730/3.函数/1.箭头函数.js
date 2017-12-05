let func = function (a) {
  //console.log(a, b);
  return a + 1;
};

//let arrowFunc = (a, b) => {
//  console.log(a, b);
//  return a + b;
//};

//let arrowFunc = (a, b) => a + b;

let arrowFunc = a => a + 1;

let hw = () => console.log('Hello World!');


func(1, 2);
console.log(arrowFunc(1, 2));
console.log(hw());