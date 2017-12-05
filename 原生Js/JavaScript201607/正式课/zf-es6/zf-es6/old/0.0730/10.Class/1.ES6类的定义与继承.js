/**
 * Created by Weil on 16/7/30.
 */
class Parent {
  constructor () {

  }

  sayP () {
    console.log("P");
  }
}

class Child extends Parent {
  constructor () {
    super();
  }

  sayC () {
    console.log("C");
  }
}

let instance = new Child();
console.log(instance instanceof Child);
console.log(instance instanceof Parent);
instance.sayC();
instance.sayP();