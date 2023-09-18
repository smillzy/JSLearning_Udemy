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

# Call Stack

Call stack 是 JS 引擎**追蹤**本身在調用多個函數的程式碼中**位置**的機制，是資料結構的一種(電腦中的資料結構有分成 stack, q, tree, graph 等等)

Call stack 可以幫助我們知道 JS 引擎當前*正在運行*什麼函式以及從該函數中*調用了哪些函式*等

Call stack 會**後進先出 last-in-first-out(LIFO)** ，其機制為：

1. 當執行函式 f1 時， JS 引擎將其添加到 call stack 中，然後開始執行該函式

2. 若該函式內部又調用其他函式 f2 ，則將函式 f2 添加到 call stack 中，然後開始執行該函式

3. 當 f2 執行完畢後， JS 引擎將其從 call stack 中取出，並且從 f1 停止的位置繼續執行

4. 當 f1 執行完畢後， JS 引擎將其從 call stack 中取出

```Java Script
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
```

**!!**如果 call stack 堆疊過高，高出記憶體 RAM 分配給 call stack 的最大空間，則導致「stack overflow」的問題

[stack overflow](https://stackoverflow.com/)

```Java Script
// 程式設計中，如果一個function執行自己這個function
// 這種狀況稱為遞迴recursion
function hello(){
  console.log("hello...");
  hello(); // 再執行他自己
}

hello();  // 第一個執行

// -> hello...
// -> hello...
// -> .
// -> .
// -> .
// -> 範圍錯誤RangeError : Maximum call stack size exceeded超出大小
```

# 遞迴 Recursion

遞迴關係 recurrence relation 是一種定義數列的方式，數列的每一項目定義為*前面項的函數*

程式語言中，與遞迴演算法 recursive algorithm 有相似的概念 -> 當一個函式內部，執行自己這個函式，這種情況就是遞迴演算法(因此，遞迴演算法絕對會產生 call stack)

例如：我們可以定義數列 S

1. A base case S(1) = 2

需要定義一個 base case (基準情況)。 Base case 的用途是為了避免遞迴演算法產生在 call stack 上無限疊加的情況

2. S(n) = 2 \* S(n − 1) for n ≥ 2

以上面的規則可知，S 會是等比數列 2, 4, 8, 16, 32, …

```Java Script
function s(n) {
  if (n == 1) {
    // -> base case
    return 2;
  }
  return 2 * s(n - 1);
}

console.log(s(10)); // -> 1024
```

練習

```Java Script
//1 + 2 + 3 + ... + n = ?
function addUpto(n) {
  if (n == 1) {
    // -> base case
    return 1;
  }
  return n + addUpto(n - 1);
}

console.log(addUpto(10)); // -> 55
console.log(addUpto(100)); // -> 5050
console.log(addUpto(1000)); // -> 500500
```

# 費波那契數列

費波那契數列是以遞迴的方法來定義：

1. F(0) = 0
2. F(1) = 1
3. F(n) = F(n−1) + F(n−2) for all n ≥ 2

ex: F(10) = F(9) + F(8)  
 F(9) = F(8) + F(7)

所以，費波那契數列的前幾項列出來會是:  
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

```Java Script
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
```

費波那契數列在 n 不斷變大時，後一項與前一項的比例會逐漸趨於黃金比例

```Java Script
for(let i = 2; i < 15; i++){
  console.log(fsequence(i + 1) / fsequence(i));  // n 越來越大時，數值會越趨近於1.618
}
```

# Constructor Function

在函式執行環境的 creation phase 當中，每個 function 都有創建 `this` 關鍵字這個步驟，`this`關鍵字指的是正在執行當前 method 的 object

如果被調用的 function 是常規 function 而非 method，則`this`關鍵字會指向**global object**

因為 closure 會向外找 this 這個字，而在 global execution context 中可以找到，所以 this 才會指向 global object = 瀏覽器 window object

**在 JavaScript 的語法中，若 function 被調用時使用了 new 關鍵字，則 function 會被當成 constructor function 來使用**

Constructor function 中的`this`關鍵字指的是一個**新製作的物件**

此外，New 關鍵字可以在分配額外的記憶體給 constructor function 所新製作的物件，物件會**自動**被 constructor function 給 return

透過使用 Constructor Function，我們可以大量製造 attributes 與 methods 相似的物件，程式碼較容易維護

```Java Script
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
```

Constructor Function 製作出的每個物件，是獨立的，所以會**單獨佔據**記憶體位置

```Java Script
// reference data type，在RAM的位置
console.log(phoebe.sayHi == Darren.sayHi); // -> false
```

# 繼承 Inheritance

在 JavaScript 中，每個物件都有一個 private attribute 叫做**proto**

**proto**屬性存放的值是*另一個物件*

若物件 A 的**proto**屬性的值是設定成另一個物件 B，則物件 A 就*繼承*了物件 B 的所有 attributes 以及 methods

```Java Script
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
```

每個 constructor function 都可以設定 prototype 屬性(prototype 屬性本質上來說，就是一個 empty object)

所有從 constructor function 製作出來的物件， 其**proto**屬性都是**自動指向 constructor function 的 prototype 屬性**

```Java Script
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function () {
    console.log(this.name + "說你好");
  };
}

// console.log(Person.prototype) // -> {} empty object

let phoebe = new Person("Phoebe", 23); // -> phoebe.__proto__ => Person.prototype
let darren = new Person("Darren", 25); // -> darren.__proto__ => Person.prototype
```

obj.**proto** 以及 A.prototype 都是 reference data type，所以 true 代表兩者指向同個記憶體位置

```Java Script
console.log(phoebe.__proto__ == Person.prototype); // -> true
```

constructor function 的 prototype 屬性繼承 attributes and methods 的原理，就叫做**Prototype Inheritance**

若從 constructor function 製作出的每個物件都有相似的 methods，我們可以把 methods 全部移動到 constructor function 的 prototype 屬性內部，而不是在個別的物件中重複定義 methods

設定一個 function

```Java Script
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function () {
    console.log(this.name + "說你好");
  };
}

Person.prototype.hello = function () {
  console.log(this.name + "說你好");
};

phoebe.hello(); // -> phoebe說你好
console.log(phoebe.hello == darren.hello); // -> true
```

設定 attributes

```Java Script
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function () {
    console.log(this.name + "說你好");
  };
}

Person.prototype.type = "人類";

console.log(phoebe.type); // -> 人類
```

使用 constructor function 來做物件的好處在於：

1. 程式碼容易撰寫且維護，大量物件可以透過 constructor function 來製作

2. **節省記憶體空間**。兩個物件若有可以共用 attritubes 或 methods，但分開製作，則會分別佔用記憶體內的不同位置。若使用 constructor function 來製作，則兩個物件繼承來的 attributes 以及 methods 都是指向記憶體的相同位置

# 原型鏈 Prototype Chain

JS 內建的資料類型都有繼承其他的 Prototype

例如，[1, 2, 3]這個`array`繼承了 Array Prototype，而 Array Prototype 又繼承自 Object Prototype

這種 Prototype 不斷往上連結的結果就叫做**Prototype Chain**

JavaScript 中的所有物件最後的 Prototype Chain 都會連到一個叫做 Object Prototype 的地方，是 Prototype Chain 的終點

# Function Methods

在 JavaScript 中，function 是一種特別的物件

從 Prototype inheritance 可以看出，所有的 function 都有繼承 Object prototype。因此，function 也是 object 的一種

在 JavaScript 中的 Function.prototype 內有以下三個常用 methods：

- `function.bind(obj)` – 將 function 的 `this` 關鍵字綁定 bind 為 obj

  ```Java Script
  let Phoebe = {
    name: "Phoebe",
    age: "23",
  };

  function getAge() {
    console.log(this); // -> window
    return this.age;
  }

  console.log(getAge()); // -> undefined

  let newFunction = getAge.bind(Phoebe);
  console.log(newFunction()); // -> 23
  ```

- `function.call(obj, arg1, /\* …, \*/ argN)` - 使用給定的 obj 當作 this 值來調用函數。 arg1, /_ …, _/ argN 為 optional

  ```Java Script
  let Phoebe = {
    name: "Phoebe",
    age: "23",
  };

  function getAge(country, height) {
    console.log(this.name + "來自" + country + ", 身高為" + height + "cm");
    return this.age;
  }

  getAge.call(Phoebe, "Taiwan", 165); // -> Phoebe來自Taiwan, 身高為165cm
  ```

- `function.apply(obj, argsArray)` – 與 call 相同，但 arguments 是使用 **arguments array**

  ```Java Script
  let Phoebe = {
    name: "Phoebe",
    age: "23",
  };

  function getAge(country, height) {
    console.log(this.name + "來自" + country + ", 身高為" + height + "cm");
    return this.age;
  }

  getAge.apply(Phoebe, ["Taiwan", 165]); // -> Phoebe來自Taiwan, 身高為165cm
  ```

# Prototype Inheritance in Constructors

一個 constructor function A 可以透過*兩個設定*來繼承另一個 constructor function B 的 prototype 物件：

1. 在 constructor function A 的內部執行`B.call(this, args1, …, argsN)`。我們可以透過這段程式碼直接將 B 所設定的屬性套給 A 做使用
2. 設定`A.prototype = Object.create(B.prototype)`。 Object.create()可以創建一個全新的物件

這樣一來，所有在 B.prototype 內部的 attributes 與 methods 都可以套用給 A.prototype

所有 A.prototype 所設定的額外的 attributes 與 methods 都需要寫在 A.prototype = Object.create(B.prototype)這行程式碼的下方

不能寫 A.prototype = B.prototype 是因為，constructor.prototype 是`reference data type`

```Java Script
// 如果寫
A.prototype = B.prototype;
A.prototype.add = function() {}
// 則A, B兩個prototype都指向記憶體的相同位置，且兩個prototype都有add()這個methods了
```

```Java Script
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

Student.prototype = Object.create(Person.prototype);
Student.prototype.study = function () {
  console.log(this.name + "正在努力讀" + this.major);
};

let Phoebe = new Student("Phoebe Lee", 23, "Math", 3.5);
Phoebe.sayHi();// -> Phoebe Lee說你好
Phoebe.study();// -> Phoebe Lee正在努力讀Math

let Darren = new Person("Darren Lo", 25);
Darren.study(); // -> Uncaught TypeError: Darren.study is not a function
```

如果沒有寫在 Object.create 下面

```Java Script
Student.prototype.study = function () {
  console.log(this.name + "正在努力讀" + this.major);
};

Student.prototype = Object.create(Person.prototype);

Phoebe.study(); // -> Uncaught TypeError: Phoebe.study is not a function
```

