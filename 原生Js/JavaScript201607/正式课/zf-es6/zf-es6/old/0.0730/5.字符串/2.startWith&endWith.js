/**
 * Created by Weil on 16/7/30.
 */

'use strict';
let str = "JavaScript is the best language!";

// 注意这里是4不是5, 用从0开始解释咯
let [isStartWith, isEndWith]
  = [str.startsWith("Java"), str.endsWith("!")];


console.log(isStartWith, isEndWith, str.endsWith("c", 6));