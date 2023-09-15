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

## Hoisting

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
