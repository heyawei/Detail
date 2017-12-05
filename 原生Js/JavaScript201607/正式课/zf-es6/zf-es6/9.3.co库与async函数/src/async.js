/**
 * Created by Weil on 16/6/25.
 */

// third-second-first-init
async function asyncFunc (initValue) {
  let first = await new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'first-' + initValue);
  });

  let second = await new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'second-' + first);
  });

  let third = await new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'third-' + second);
  });

  return third;
}

asyncFunc('init')
  .then((value) => {
    console.log('asyncFuncRes: ', value);
  })
  .catch((error) => {
    console.log('asyncError: ', error);
  });


//function* genFunc(initValue) {
//  let first = yield new Promise((resolve, reject) => {
//    setTimeout(resolve, 1000, 'first-' + initValue);
//  });
//
//  let second = yield new Promise((resolve, reject) => {
//    setTimeout(resolve, 500, 'second-' + first);
//  });
//
//  let third = yield new Promise((resolve, reject) => {
//    setTimeout(resolve, 700, 'third--' + second);
//  });
//
//  return 'third--' + second;
//}
//
//co(genFunc(1))
//  .then((value) => {
//    console.log(value, '---结果已经返回了');
//  });
