/**
 * Created by Weil on 16/4/10.
 */

let sybx = Symbol('subx');
let syby = Symbol('suby');

//console.log(syb, syb2, syb == syb2);
//console.log(typeof syb, syb.toString() === syb2.toString());

//let ele = document.querySelector('#li');
let ele = {};

ele[sybx] = 123;
ele[syby] = 234;
console.log(ele);
//ele.syby = 14123134;

