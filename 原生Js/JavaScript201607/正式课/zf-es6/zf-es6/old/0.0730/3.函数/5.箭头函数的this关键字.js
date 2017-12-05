let obj = {
  id: 123,
  func1: function () {
    //console.log(this, obj, this === obj);
    setTimeout(function () {
      console.log(this.id);
    })
  },
  func2: function () {
    console.log(this, obj, this === obj);
    setTimeout(() => {
      console.log(this.id);
    })
  },
  func3: () => {
    console.log(this, this === obj, this === window);
    setTimeout(() => {
      console.log(this.id);
    });
  }
};

let obj2 = {id: '000000'};

//obj.func1();
//obj.func2.call(obj2);
obj.func3.call(obj2);

//let o = {
//  func: function () {
//
//  }
//}
//
//setTimeout(function () {
//
//}, 0);





