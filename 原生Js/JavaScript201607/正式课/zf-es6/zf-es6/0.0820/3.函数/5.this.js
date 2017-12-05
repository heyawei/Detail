var obj = {
  a: 'obj_a',
  func1: function () {
    console.log(this, 'outthis');

    setTimeout(function () {
      console.log(this, this.a);
    }, 1000);
  },
  func2: function () {
    console.log(this, 'outthis');

    setTimeout(() => {
      console.log(this, this.a, this === obj);
    }, 1000);
  },
  func3: () => {
    console.log(this, 'outthis');

    setTimeout(() => {
      console.log(this, this.a);
    }, 1000);
  }
};

let obj2 = {
  a: 'obj_2'
};

//obj.func1();
//obj.func2();
//obj.func2.call(obj2);
obj.func3();
