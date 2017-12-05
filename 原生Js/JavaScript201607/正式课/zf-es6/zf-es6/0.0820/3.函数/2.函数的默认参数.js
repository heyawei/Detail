let add = (x = 0, y = 0, isReturn = true) => {

  console.log(x + y);

  if (isReturn) {
    return x + y;
  }
};

let res = add(1, undefined, false);
console.log(res);