/**
 * Created by Weil on 16/4/9.
 */
// TypeScript

//$.ajax({
//  url: 'baidu.com',
//  type: 'get',
//});
//
//$.ajax(type, url);

function ajax ({method = 'get', url = 'default_url'} = {}) {
  console.log(method, url);
}

function ajax2 ({method, url} = {method: 'get', url: 'default_url'}) {
  console.log(method, url);
}

//ajax({
//  method: 'post'
//});
//
ajax2();



























