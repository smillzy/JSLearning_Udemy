/*
// declaration, definition
function f() {
  console.log("這是我的第一個function");
}

// 執行function exection, invoke a function, function invocation
// 調用函式 call a function
f();
*/

/*
function sayHi(name) {
  console.log("你好，我的名子是" + name);
}

sayHi("Phoebe");
*/

/*
function sayHi(name, age) {
  console.log("你好，我的名子是" + name);
  console.log("我今年" + age + "歲");
}

sayHi("Phoebe", 23);
*/

/*
// circle function的參數為一個半徑，功能為算出圓面積
function circle(r) {
  console.log(3.14 * r * r);
}

let area1 = circle(10);
let area2 = circle(5);
console.log(area1 + area2);
*/

/*
// 攝氏溫度轉換成華氏溫度
// Celsius to Fahrenheit
// °F = °C * 1.8 + 32

function converter(c) {
  return c * 1.8 + 32;
}

let input = Number(prompt("請輸入攝氏溫度:"));

let result = converter(input);
alert("換算後的溫度為:" + result + "°F");
*/

/*
let friends = ["Grace", "Mike", "Darren", "Amanda", "Candy"];
// array的值被稱為元素(element)，目前有5元素，長度5

let anotherArray = [null, false, "Darren", 3.14, undefined];

console.log(friends[0]);
*/

/*
let friends = ["Grace", "Mike", "Darren", "Amanda", "Candy"];
let anotherVariable = friends;
anotherVariable[0] = "Michael";

console.log("friends array變成是:");
console.log(friends);

console.log("anotherVariable array變成是:");
console.log(anotherVariable);
*/

/*
let deposit = 500;
let anotherDeposit = deposit;
anotherDeposit = 600;

console.log("deposit為:", deposit, "anotherDeposit為:", anotherDeposit);
*/

/*
let array1 = [1, 2, 3];
let array2 = [1, 2, 3];

console.log(array1 == array2);
*/

/*
let friends = ["Grace", "Mike", "Darren", "Amanda", "Candy"];
let myFriend = friends.shift();
console.log(myFriend);
*/

/*
let myArr = [
  ["name", "address", "age"],
  ["Phoebe", "Taiwan", 23],
  ["Darren", "America", 25],
];

console.log(myArr[1][2]);
*/

/*
let Phoebe = {
  // 製作新物件，可以設定屬性properties(key-value pair), 行為methods

  // 屬性properties
  first_name: "Phoebe",
  last_name: "Lee",
  age: 23,

  // 行為methods
  sayHi() {
    console.log(this.first_name + "says hi."); // this指向Phoebe這個物件
  },

  // 可以有多個methods
  walk() {
    console.log("Phoebe is walking.");
  },

  // 要加入參數
  speak(words) {
    console.log("Phoebe says" + words);
  },
};

Phoebe.sayHi();
*/

/*
function hello() {
  console.log("hello");
  console.log(this); // -> 指向window object (glogal object)
}

hello();
// 純function，不是method
// -> hello
// -> Window {window: Window, self: Window, document: document, name: '', location: Location, …}
*/

/*
let arr = [1, 2, 3, 4, 5];
console.log(Array.isArray(arr));
*/

/*
for (let i = 0; i < 11; i++) {
  console.log(i);
}

console.log("for loop 執行完畢");

// i = 0, i < 11 is true, print 0 and i 值更新成 1
// i = 1, i < 11 is true, print 1 and i 值更新成 2
// ...
// i = 10, i < 11 is true, print 10 and i 值更新成 11
// i = 11, i < 11 is false, print for loop 執行完畢
// 總共是執行11次
*/

/*
while (true) {
  console.log("這個程式碼正在被執行...");
}
*/

/*
// 宣告一個計數器
let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}
*/

/*
let i = 11;

do {
  console.log(i);
  i++;
} while (i < 10);
*/
