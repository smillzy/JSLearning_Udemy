/*
console.log(window);
*/

// let a = 3;

// let result = area(a);
// console.log(result);

// function area(s) {
//   return s * s;
// }

// // 1. creation phase創造階段
// // 1.1 global object 製作完成 -> 這樣window.alert()有定義，才有意義，之後在有辦法在執行程式碼時執行window.alert()
// // 1.2 建立 scope
// // 1.3 this keyword
// // 1.4 hoisting，a undefined, result undefined, area is a function，放進記憶體
// //     (這邊已經先存好function內容了，因此可以在定義function前，先在前面使用function)

// // 2. execution phase執行階段
// // a = 3
// // 執行area function，把a套進去
// // result = 9
// // console.log(result);

// // Global Execution Context執行到let result = area(a)這行的area(a)時
// // 馬上要執行下面的function area(s)，會馬上進入Function Execution Context
// // 1. creation phase創造階段
// // 1.1 argument object -> s = 3
// // 1.2 建立 scope
// // 1.3 this keyword(指向window object)
// // 1.4 hoisting (X，裡面沒function了)

// // 2. execution phase執行階段
// // s * s
// // return

// console.log(x);
// var x;
