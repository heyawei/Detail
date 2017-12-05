/**
 * Created by Weil on 16/4/16.
 */
// Array.copyWith
// target 被覆盖的下标
// start 截取的开始下标
// end 截取结束的下标的后一个
//Array.prototype.copyWithin(target, start = 0, end = this.length);

let arr = [1, 2, 3, 4 ,5];

arr.copyWithin(1, 0, 2);
console.log(arr);






