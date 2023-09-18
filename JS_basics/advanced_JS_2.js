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

/*
function f1() {
  console.log("開始執行f1。。。");
  f2();
  console.log("結束執行f1。。。");
}

function f2() {
  console.log("開始執行f2。。。");
  console.log("結束執行f2。。。");
}

f1();  
//開始執行時，JS引擎就會把function f1放進call stack
//執行結束時，JS引擎就會把function f1拿出call stack

// -> 開始執行f1。。。
// -> 開始執行f2。。。
// -> 結束執行f2。。。
// -> 結束執行f1。。。
*/

/*
function hello(){
  console.log("hello...");
  hello(); // 再執行他自己
}

hello();  // 第一個執行
*/

/*
function s(n) {
  if (n == 1) {
    // -> base case
    return 2;
  }
  return 2 * s(n - 1);
}

console.log(s(10)); // -> 1024
*/

/*
//1 + 2 + 3 + ... + n = ?
function addUpto(n) {
  if (n == 1) {
    // -> base case
    return 1;
  }
  return n + addUpto(n - 1);
}

console.log(addUpto(10));
*/

/*
function fsequence(n) {
  if (n == 0) {
    return 0;
  }

  if (n == 1) {
    return 1;
  }

  return fsequence(n - 1) + fsequence(n - 2);
}

console.log(fsequence(10)); // -> 55
console.log(fsequence(11)); // -> 89


for(let i = 2; i < 15; i++){
  console.log(fsequence(i + 1) / fsequence(i));  // n 越來越大時，數值會越趨近於1.618
}
*/

// let Phoebe = {
//   name: "Phoebe",
//   sayHi() {
//     console.log(this.name + "說你好");
//   },
// };

// let Darren = {
//   name: "Darren",
//   sayHi() {
//     console.log(this.name + "說你好");
//   },
// };

// let Candy = {
//   name: "Candy",
//   sayHi() {
//     console.log(this.name + "說你好");
//   },
// };

/*
// Constructor Function
// JS當中，Constructor Function以大寫開頭
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function () {
    console.log(this.name + "說你好");
  };
}

let phoebe = new Person("Phoebe", 23);
let Darren = new Person("Darren", 25);
let Candy = new Person("Candy", 27);

console.log(phoebe); // -> Person {name: 'Phoebe', age: 23}
console.log(Darren); // -> Person {name: 'Darren', age: 25}
phoebe.sayHi() // -> Phoebe說你好
*/

/*
let phoebe = {
  name: "Phoebe",
  sayHi() {
    console.log("說你好");
  },
};

let darren = {
  __proto__: phoebe,
};

console.log(darren.name); // -> Phoebe
darren.sayHi(); // -> 說你好
*/

/*
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function () {
    console.log(this.name + "說你好");
  };
}

Person.prototype.type = "人類";

Person.prototype.hello = function () {
  console.log(this.name + "說你好");
};

// let phoebe = new Person("Phoebe", 23); // -> phoebe.__proto__ => Person.prototype
// let darren = new Person("Darren", 25); // -> darren.__proto__ => Person.prototype

// phoebe.hello(); // -> phoebe說你好
// console.log(phoebe.hello == darren.hello); // -> true

console.log(phoebe.type); // -> 人類
*/

// let arr = [1, 2, 3];
// // = let arr = new Array(1, 2, 3);
// console.log(arr);

/*
let Phoebe = {
  name: "Phoebe",
  age: "23",
};

function getAge(country, height) {
  console.log(this.name + "來自" + country + ", 身高為" + height + "cm");
  return this.age;
}

getAge.apply(Phoebe, ["Taiwan", 165]); // -> Phoebe來自Taiwan, 身高為165cm
*/

// console.log(getAge()); // -> undefined

// let newFunction = getAge.bind(Phoebe);
// console.log(newFunction()); // -> 23

/*
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHi = function () {
  console.log(this.name + "說你好");
};

function Student(name, age, major, grade) {
  Person.call(this, name, age);
  this.major = major;
  this.grade = grade;
}

Student.prototype.study = function () {
  console.log(this.name + "正在努力讀" + this.major);
};

Student.prototype = Object.create(Person.prototype);

let Phoebe = new Student("Phoebe Lee", 23, "Math", 3.5);
Phoebe.sayHi(); // -> Phoebe Lee說你好
Phoebe.study(); // -> Phoebe Lee正在努力讀Math

let Darren = new Person("Darren Lo", 25);
Darren.study(); // -> Uncaught TypeError: Darren.study is not a function
*/
