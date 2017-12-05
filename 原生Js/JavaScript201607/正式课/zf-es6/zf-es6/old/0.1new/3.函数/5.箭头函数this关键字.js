/**
 * Created by Weil on 16/4/9.
 */
// TypeScript

//function func () {
//  //setTimeout(function () {
//  //  console.log(this.id);
//  //});
//  setTimeout(() => {
//    console.log(this.id);
//  })
//}
//
//let obj = {
//  id: 123
//};
//
//func.call(obj);

let obj = {
  id: 123,
  func1: function () {
    setTimeout(function () {
      console.log(this.id);
    })
  },
  func2: function () {
    setTimeout(() => {
      console.log(this.id);
    })
  },
  func3: () => {
  setTimeout(() => {
    console.log(this.id);
  });
}
};

obj.func1();
obj.func2();
obj.func3();































