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

/*
function hello() {
  let a = 10;  // 變數a的可訪問性，只有hello()這個function才可以訪問a
  console.log(a);
}

hello();

function hello2() {
    console.log(a);  // a是定義在hello()裡面，那hello2()可不可以去訪問變數a? => 不可以
}

hello2(); // -> ReferencrError a is not defined
*/

/*
let x = 10;  //定義在最外層的變數叫全域變數global variable
function hello() { 
    function hello2() { // 抓的到外層的變數值
    console.log(x + 10);
  }
  hello2();
}

hello(); // -> 20
*/

/*
if (true) {
  let x = 10; // -> Block scope，可訪問區域只限在大括弧中
}

console.log(x); // -> ReferencrError x is not defined

for (let i = 0; i < 20; i++){}
console.log(i); // -> ReferencrError i is not defined
*/

/*
var x = 100;

for (var x = 0; x < 10; x++) {}
console.log(x); // -> 10
*/

/*
function sayHi() {
  console.log("hello");

  // function declaration也有Function scope
  function sayHi2() {
    console.log("hello2");
  }
}

sayHi2(); // -> ReferenceError sayHi2 is not defined
*/

/*
let c = 100;

function add(a, b) {
  let c = 5;
  return a + b + c; // -> 3 + 4 + 5，先找argument object，再找local variable
}

add(3, 4); // -> 12
*/

/*
let myName = "Phoebe";

function sayHi() {
  let myName = "Darren";

  console.log(myName + "說你好"); // -> Darren說你好
  sayHi2(); // -> Darren說你好

  function sayHi2() {
    console.log(myName + "說你好");
  }
}



sayHi();
// -> Darren說你好 
// -> Darren說你好
*/
