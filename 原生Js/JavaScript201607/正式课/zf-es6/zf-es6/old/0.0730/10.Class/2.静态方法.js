/**
 * Created by Weil on 16/7/30.
 */
class Parent {
  constructor () {}
  static sayHi () {console.log('Hi');}
  sayP () {console.log('P');}
}
//Parent.sayHi = () => {
//  console.log('Hi');
//};
//Parent.prototype.sayP = () => {
//  console.log('P');
//};

class Child extends Parent {
  constructor () {
    super();
  }
}
//console.log(typeof Parent, typeof Child);
Child.sayHi();
//console.log(Child.prototype.__proto__ === Parent.prototype);
console.log(Child.__proto__ === Function.prototype);
console.log(Child.__proto__ === Parent);

//function ssss () {}
//console.log(ssss.__proto__ === Function.prototype);

//function Parent () {
//
//}
//
//Parent.sayHi = function () {
//  console.log('Hi');
//};
//Parent.obj = {};
//
//function Child () {
//
//}
//Child.prototype = new Parent();
//let c = new Child();

//Parent.sayHi();
// c.__proto__.__proto__.constructor.sayHi();
//Child.prototype.__proto__.constructor.sayHi();
