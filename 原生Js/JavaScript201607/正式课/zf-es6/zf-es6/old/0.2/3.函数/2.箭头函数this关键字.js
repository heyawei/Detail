/**
 * Created by Weil on 16/5/6.
 */

function a () {
  let _self = this;
}


function func () {
  /*let _self = this;

  setTimeout(function () {
    console.log(this.id, 'before');
    console.log(_self.id, 'after');
  }, 0);*/
  //setTimeout(() => {
  //  console.log(this.id);
  //}, 0);
}

//let obj = {
//  id: 123
//};

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