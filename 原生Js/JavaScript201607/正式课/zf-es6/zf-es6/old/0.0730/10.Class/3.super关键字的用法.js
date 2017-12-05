/**
 * Created by Weil on 16/7/30.
 */

/**
 * Created by Weil on 16/7/24.
 */
"use strict";

//function P () {
//  this.p = 'p';
//}
//function C () {
//  this.c = 'c';
//}
//C.prototype = new P();
//var c = new C();
//console.dir(c);
//console.log('------');

// 父类
class Parent {
  constructor (p) {
    //alert(1)
    this.p = p;
  }

  static parentStatic () {
    console.log('parentStatic');
  }

  sayParent () {
    //console.log(new.target);
    //debugger;
    console.log('parent');
  }
}
Parent.parentCount = 1;
Parent.prototype.parentStr = 'parentStr';

// 子类
class Child extends Parent {
  constructor (c) {
    //debugger;
    super('p');
    //console.log('=-=-=--==-=-==--=-=-=-=-=-=-=-=-=');
    //debugger;
    this.c = c;
  }

  static childStatic () {
    debugger;
    console.log('childStatic');
    super.parentStatic();
    Child.__proto__.parentStatic();
    console.log(super.parentCount, Child.__proto__.parentCount);
  }

  sayChild () {
    console.log('child');
    console.log(super.parentStr);
    super.sayParent();
    console.log(instance.__proto__.parentStr);

    console.log('-----');
    console.log(Child.prototype.__proto__.parentStr);
    console.log(super.x);
  }
}

let instance = new Child('c');
//instance.__proto__.x = 'x';
//instance.sayChild();

//console.log('\n静态类中的super');
//Child.childStatic();


console.log('\n用一个对象去解释 super 和 实例的__proto__ 的关系');
let ParentObj = {
  sayParent () {
    console.log('say parent');
  }
};

let ChildObj = {
  sayChild () {
    console.log('say child');
    ChildObj.__proto__.sayParent();
    super.sayParent();
    debugger;
    // super 就相当于 ChildObj.__proto__
  }
};

Object.setPrototypeOf(ChildObj, ParentObj); // ChildObj.__protp__ = ParentObj
ChildObj.sayChild();