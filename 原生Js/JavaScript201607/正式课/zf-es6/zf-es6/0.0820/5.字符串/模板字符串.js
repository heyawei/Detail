//let str = 'str';
//let str2 = "str";
//let str3 = `str`;

//let name = 'lilei';
//let arr = [1, 2, 3];
//let obj = {a: 'a'};
//
//let func = () => {
//  return false
//}
//
//let str = `My name is\$ ${func() ? '真的': '假的'}`;
//// ` $ { } \
//console.log(str);

let name = 'hanmeimei';
let boy = 'lilei';

let tmp = (strArr, ...variables) => {
  console.log(strArr, variables);

  return '123213';
};

let str = tmp`My name is ${name} and ${boy} is not my boyFriend`;

console.log(str);


























