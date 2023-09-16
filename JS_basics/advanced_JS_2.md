# 執行環境 Execution Context

當 JS 引擎執行程式碼(script)時，會創建 execution contexts(執行環境)

JavaScript 共會建立**兩種**執行環境：

- 全域執行環境 Global Execution Context (GEC)
- 函式執行環境 Function Execution Context (FEC)

每種 execution context 都包含**兩個**階段：

- 創造階段 creation phase
- 執行階段 execution phase

## 全域執行環境 Global Execution Context

當**初次執行**一份 JavaScript 程式碼時， JS 引擎會創造**第一種** execution context，叫 Global Execution Context

在 Global Execution Context 內部

- 先進入 **creation phase**：

  1. 創建全域物件 global object (例如，瀏覽器中的 window object，或 Node.js 中的 global object)

     ```Java Script
     console.log(window);  // -> window(object)
     ```

     明明沒有去定義 window 變數，window 他指向 window object 是怎麼來的?

     -> 在瀏覽器

     初次執行程式碼時， JS 引擎會創造 Global Execution Context ，在 Global Execution Context 內部，會去創建 window object 來當作他的 global object

     -> 在 visual studio code

     會出現 ReferenceError：window is not defined，因為沒有瀏覽器、視窗，就不會創建一個 window object

  2. 建立 scope (變數所參考的值)
  3. 創建 `this` 關鍵字，並被綁定至 global object

     ```Java Script
     console.log(this);
     // 瀏覽器 -> window(object)
     // visual studio code -> {} (empty object)
     ```

  4. 將 variables 、class 和 function 分配至記憶體 RAM (hoisting 步驟)

- creation phase 結束後，會進入**execution phase**：

  1. 逐行( line by line )執行程式碼
  2. 遇到*遞迴*時，則使用 call stack 來排定工作順序

```Java Script
let a = 3;

let result = area(a);
console.log(result);

function area(s) {
  return s * s;
}

// 1. creation phase創造階段
// 1.1 global object 製作完成 -> 這樣window.alert()有定義，才有意義，之後在有辦法在執行程式碼時執行window.alert()
// 1.2 建立 scope
// 1.3 this keyword
// 1.4 hoisting，a undefined, result undefined, area is a function，放進記憶體
//     (這邊已經先存好function內容了，因此可以在定義function前，先在前面使用function)

// 2. execution phase執行階段
// a = 3
// 執行area function，把a套進去
// result = 9
// console.log(result);
```

## 函式執行環境 Function Execution Context

每次的 **function call** ，JS 引擎也都會創造一個 Function Execution Context

一樣也有 creation phase 以及 execution phase，但差別在於，函式執行環境**不創建**global object，而是創建**argument object**

Argument object 包含了被放入此函式的 parameters 的數值參照值(a reference to all the parameters passed into the function)

- 函式執行環境的 creation phase 是：

  1. 創建 argument object
  2. 建立 scope (依照 closure 這個準則)
  3. 創建 `this` 關鍵字(**注意** this 關鍵字指的是 window object 或 object method 中的 object)
  4. 將 variables 、class 和 function 分配至記憶體 RAM(hoisting 步驟)

- creation phase 結束後，會進入 execution phase：
  1. 逐行( line by line )執行程式碼
  2. 遇到*遞迴*時，則使用 call stack 來排定工作順序

```Java Script
let a = 3;

let result = area(a);
console.log(result);

function area(s) {
  return s * s;
}

// Global Execution Context執行到let result = area(a)這行的area(a)時
// 馬上要執行下面的function area(s)，會馬上進入Function Execution Context
// 1. creation phase創造階段
// 1.1 argument object -> s = 3
// 1.2 建立 scope
// 1.3 this keyword(指向window object)
// 1.4 hoisting (X，裡面沒function了)

// 2. execution phase執行階段
// s * s
// return
```

## 提升 Hoisting

JavaScript Hoisting 是指 JS 引擎在執行代碼之前，將 function、variables 或 class 的 declaration**移動**到其範圍頂部的過程

```Java Script
// Hoisting 也會分配放進RAM
// let a;
// const z;
// var x = undefined;
// function hello() {...arguements...}

let a = 3;
const z = 6;
var x = 5;

hello();

function hello() {
  console.log("hello");
}
```

Hoisting 的優點之一是，它允許我們在 code 中，declare function 之前使用這個 function(但要小心，這個功能**只對 function declaration 有用**)

```Java Script
// Hoisting
// let myFunction;

myFunction();

let myFunction = () => {
    console.log("this is my function");
}
// -> ReferenceError：Cannot access 'myFunction' before initialization
// 因為後面的assignment沒有hoisting進去
```

Hoisting 也適用於 variables ，因此我們可以在 declaration 和/或 initialization 之前在 code 中使用 variables

**注意** JavaScript 只 hoist declaration ，而不是 initialization ！也就是說，let x = 10; 這段程式碼只有**let x**會被放到程式碼頂部

Hoisting 發生時，使用 `var` 做 declaration 的 variable 會給定**初始值 undefined**

使用 `let`, `const` 做 declaration 的 variable 並**不會**給定任何初始值

let 可以 declare without initialization，且我們可以用 console.log()檢查 let 的變數值是 undefined

但這個 undefined 的 initialization 並不像 var 是發生在*creation phase*的*hoisting*階段發生的，而是在**execution phase**的階段。

```Java Script
// Hoisting
// let x;

// -> ReferenceError：Cannot access 'x' before initialization
console.log(x);
let x;

// -> x is undefined
let x; // -> execution phase階段才會去定義x = undefined
console.log(x);
```

## 範圍 Scope

是指在當前的 execution context 之中，變數的**可訪問性**accessibility 為何？(variable scope 為何?)

我們在 function A 所宣告的變數，在 function B 內部可以使用(訪問)嗎？ => **不可以**

```Java Script
function hello() {
  let a = 10;  // 變數a的可訪問性，只有hello()這個function才可以訪問a
  console.log(a);
}

hello();

function hello2() {
    console.log(a);  // a是定義在hello()裡面，那hello2()可不可以去訪問變數a? => 不可以
}

hello2(); // -> ReferencrError a is not defined
```

另一個例子，hello2()可以訪問到的全域變數 global variable 的 x = 10 嗎？ -> **可以**

```Java Script
let x = 10;  //定義在最外層的變數叫全域變數global variable
function hello() {
    function hello2() { // 抓的到外層的變數值
    console.log(x + 10);
  }
  hello2();
}

hello(); // -> 20
```

了解 Scope 可以知道，每個變數在哪些區域或範圍是*有意義*的，或者是說，變數在哪些區域是*可訪問*或*可使用*的

JavaScript 的變數有以下幾種 Scope：

- `Global scope`: The default scope for all code running in the script  
   `var`、`let`、`const`都有 Global scope

- `Module scope`: The scope for code running in module mode
- `Function scope`: The scope is created with a function  
   `var`、`let`、`const`、function declaration 都有 Function scope

  ```Java Script
  function sayHi() {
    console.log("hello");

    // function declaration也有Function scope
    function sayHi2() {
      console.log("hello2");
    }
  }
  ```

sayHi2(); // -> ReferenceError sayHi2 is not defined

此外，用 `let` 或是 `const` 去宣告的變數屬於下面這個額外的 scope：(沒有`var`)

- `Block scope`: The scope created with a pair of curly braces -> {} (a block)  
  會出現在兩種地方

  `if statement`

  ```Java Script
  if (true) {
    let x = 10; // -> Block scope，可訪問區域只限在大括弧中
  }
  console.log(x); // -> ReferencrError x is not defined
  ```

  `loop`

  ```Java Script
  for (let i = 0; i < 20; i++){}
  console.log(i); // -> ReferencrError i is not defined
  ```

  用 var 是全可訪問，不會被大括弧侷限

  ```Java Script
  // if statement
  if (true) {
    var x = 10;
  }
  console.log(x); // -> 10

  // loop
  var x = 100;

  // redeclaration, reassignment
  for (var x = 0; x < 10; x++){}

  console.log(x); // -> 10
  ```

## 閉包 Closure

在函式執行環境 function execution context 中，如果發現不在 function scope 內部的變數，JavaScript 將轉到其他地方查找

閉包 Closure 就是指這種將函數與其周圍的狀態或語詞環境結合在一起的組合

```Java Script
function add(a, b){
    // argument object a = 3, b = 4, c = 如果function內部找不到，就會向外找，組合起來就是Closure
    return a + b + c;
}

add(3, 4); // -> 7
```

在 JavaScript 中，每次 function execution context 都會在**creation phase**創建 closure

Closure 的規則是：

1. 從 Argument Object 以及 local variable 去尋找

```Java Script
let c = 100;

function add(a, b) {
  let c = 5;
  return a + b + c; // -> 3 + 4 + 5，先找argument object，再找local variable
}

add(3, 4); // -> 12
```

2. 若從 1 找不到，則從記憶體 RAM 被分配給函數的位置開始尋找

```Java Script
let myName = "Phoebe";

function sayHi() {
  let myName = "Darren";

  console.log(myName + "說你好"); // -> Darren說你好
  sayHi2(); // -> Phoebe說你好
}

function sayHi2() {
  console.log(myName + "說你好");
}

sayHi();
// -> Darren說你好
// -> Phoebe說你好

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
```

3. 若在目前的 execution context 找不到，就繼續往外層、往全域一層一層的去找
