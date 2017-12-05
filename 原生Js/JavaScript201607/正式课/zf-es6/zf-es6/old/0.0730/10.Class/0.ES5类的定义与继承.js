/**
 * Created by Weil on 16/7/30.
 */

function Parent () {
  console.log('parent constructor');
}
Parent.prototype.sayP = function () {
  console.log('P');
};

function Child () {

}
//debugger;
Child.prototype = new Parent();
Child.prototype.constructor = Child;
//debugger;
Child.prototype.sayC = function () {
  console.log("C");
};

var instan = new Child();
instan.sayC();
instan.sayP();

console.log(Parent.prototype.constructor === Parent);

console.log(instan instanceof Child);
console.log(instan instanceof Parent);
