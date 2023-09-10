# 數學函數

JavaScript 的函數類似於數學的函數。從數學課中回憶，一個函數是類似這樣的式子 -> 𝑓(𝑥)=3𝑥+6

𝑓 這個字母是此函數的名稱，𝑥 是此函數的參數 parameter，3𝑥+6 是函數的輸出值(主體)，而且函數應該只返回一個值（一對一、多對一可以，但一對多不行）

[Graphing Calculator](https://www.desmos.com/calculator?lang=zh-TW)

在 𝑓(𝑥)=3𝑥+6 這個函數中， 𝑥 被稱作是 parameter。但是當使用函數時， 𝑓(5)的數字 5 被稱為是 argument

# 函式 Function

除了 JavaScript 內建的 function 之外，也可以定義或客製化自己的 function

內建的 function : `alert()`, `prompt()`, ...

Function 是由一連串的程式碼組成，用來完成任務或是計算值

宣告 declare 一個 Function 的語法

```Java Script
// declaration, definition
function f() {
  console.log("這是我的第一個function");
}

// 執行function execution, invoke a function, function invocation
// 調用函式 call a function
f();
```

有 parameter，sayHi(**myParameter1**)

```Java Script
function sayHi(myParameter1) {
  console.log("你好，我的名子是" + myParameter1);
}

sayHi("Phoebe");
```

給多個參數

```Java Script
function sayHi(myParameter1, myParameter2) {
  console.log("你好，我的名子是" + myParameter1);
  console.log("我今年" + myParameter2 + "歲");
}

sayHi("Phoebe", 23);
```

# return

Function 中，若沒有 `return` 語句的話，function 將返回`undefined` （JavaScript 的 function 默認的 return value）

```Java Script
// circle function的參數為一個半徑，功能為算出圓面積

// 第一種寫法(我自己試打)
function circle(r) {
  return 3.14 * r * r;
}

console.log(circle(10) + circle(5));  // -> 392.5

// 第二種寫法(教學)
function circle(r) {
  return 3.14 * r * r;
}

let result = circle(10) + circle(5);
console.log(result);

// 第三種寫法(教學)
function circle(r) {
  console.log(3.14 * r * r);
}

let area1 = circle(10);
let area2 = circle(5);
console.log(area1 + area2);
```

異常寫法

```Java Script
// circle function的參數為一個半徑，功能為算出圓面積
function circle(r) {
  console.log(3.14 * r * r);
}

console.log(circle(10));
// 會出現的值
// -> 314        Line3 function裡print circle(10)的數值
// -> undefined  Line6 console.log()裡代出的數值
// 也就是說對console.log()來說circle(10)是一個undefined，因為沒有return值出來
```

```Java Script
// circle function的參數為一個半徑，功能為算出圓面積
function circle(r) {
    console.log(3.14 * r * r);
}

let result = circle(10) + circle(5);
console.log(result);
// 會出現的值
// -> 314        Line3 function裡print circle(10)的數值
// -> 78.5       Line3 function裡print circle(5)的數值
// -> NaN        Line7 console.log()裡print result
// 也就是說對result來說circle(10)、circle(5)皆是undefined，undefined + undefined = NaN
```

注意!!**任何放在 return 語句底下的程式碼都不會被執行**

小試身手

```Java Script
// 攝氏溫度轉換成華氏溫度
// Celsius to Fahrenheit
// °F = °C * 1.8 + 32

function converter(c) {
  return c * 1.8 + 32;
}

let input = Number(prompt("請輸入攝氏溫度:"));

let result = converter(input);
alert("換算後的溫度為:" + result + "°F");
```

# Array 陣列

JavaScript 中，array 並不是 primitive data type，當我們有需要將用途或性質相近的數據存儲在一起， Array 即可派上用場

```Java Script
let friends = ["Grace", "Mike", "Darren", "Amanda", "Candy"];
```

具有以下核心特徵

1. Array 是可調整大小的，並且可以包含不同資料類型的混合

   ```Java Script
   let friends = ["Grace", "Mike", "Darren", "Amanda", "Candy"];
   // array的值被稱為元素(element)，目前有5元素，長度5

   let anotherArray = [null, false, "Darren", 3.14, undefined];
   ```

2. Array 中的元素必須使用非負整數作為 index 來訪問(= string index)

   ```Java Script
   let friends = ["Grace", "Mike", "Darren", "Amanda", "Candy"];

   console.log(friends[0]);  // -> Grace
   ```

3. Array 的第一個元素在 index 0 處，第二個在 index 1 處，依此類推。最後一個元素在 Array 的長度減 1 處
4. Array 複製 會複製 reference

   ```Java Script
   let friends = ["Grace", "Mike", "Darren", "Amanda", "Candy"];
   friends[0] = "Michael";
   console.log(friends);  // -> ['Michael', 'Mike', 'Darren', 'Amanda', 'Candy']
   ```

   ```Java Script
   let friends = ["Grace", "Mike", "Darren", "Amanda", "Candy"];
   let anotherVariable = friends;
   anotherVariable[0] = "Michael";

   console.log("friends array變成是:");
   console.log(friends);
   // -> ['Michael', 'Mike', 'Darren', 'Amanda', 'Candy']
   //因為copy by reference的關係，friends的值也被更動

   console.log("anotherVariable array變成是:");
   console.log(anotherVariable);  // -> ['Michael', 'Mike', 'Darren', 'Amanda', 'Candy']
   ```

## primitive data type V.S reference data type

區分之的原因

- 通常 primitive data type 使用的 RAM 比較小，但 reference data type 很占 RAM
- 用 copy by reference，當遇到物件導向程式設計 OOP 會事半功倍

### primitive data type

- copy by value

  ```Java Script
  let deposit = 500;
  let another = deposit;
  another = 600;  // -> deposit 500, another 600
  ```

### reference data type

- copy by 引用 reference

  ```Java Script
  let friends = ["a", "b", "c"];
  let another = friends;
  another[0] = "d";  // -> friends ["d", "b", "c"], another ["d", "b", "c"]
  ```

## reference data type 比較 需注意的事

```Java Script
let array1 = [1, 2, 3];
let array2 = [1, 2, 3];

console.log(array1 == array2);  // -> false，因為程式看的是RAM的位置
```

```Java Script
let array1 = [1, 2, 3];
let array2 = array1;  // assignment operation

console.log(array1 == array2);  // -> true
```

## Array properties

`length`

```Java Script
let friends = ["Grace", "Mike", "Darren", "Amanda", "Candy"];
console.log(friends.length);
```

## Array methods

- `push(element)` - 將一個或多個元素**添加**到陣列的**末尾**，並 return 陣列的新長度

  ```Java Script
  let friends = ["Grace", "Mike", "Darren", "Amanda", "Candy"];
  friends.push("Jared");
  console.log(friends);  // -> ['Grace', 'Mike', 'Darren', 'Amanda', 'Candy', 'Jared']
  ```

  [array push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

  ```Java Script
  let friends = ["Grace", "Mike", "Darren", "Amanda", "Candy"];
  let returnValue = friends.push("Jared");
  console.log(returnValue);  // -> 6，return value 是陣列的新長度
  ```

- `pop()` - 從陣列中**刪除** **最後**一個元素並返回該元素

  ```Java Script
  let friends = ["Grace", "Mike", "Darren", "Amanda", "Candy"];
  friends.pop();
  console.log(friends);  // -> ['Grace', 'Mike', 'Darren', 'Amanda']
  ```

- `shift()` - 從陣列中**刪除** **第一個**元素並返回刪除的元素

  ```Java Script
  let friends = ["Grace", "Mike", "Darren", "Amanda", "Candy"];
  friends.shift();
  console.log(friends);  // -> ['Mike', 'Darren', 'Amanda', 'Candy']
  ```

  知道刪去誰

  ```Java Script
  let friends = ["Grace", "Mike", "Darren", "Amanda", "Candy"];
  let myFriend = friends.shift();
  console.log(myFriend);  // -> Grace
  ```

- `unshift(element)` - 將一個或多個元素**添加**到陣列的**開頭**，並 return 陣列的新長度

  ```Java Script
  let friends = ["Grace", "Mike", "Darren", "Amanda", "Candy"];
  friends.unshift("Wee");
  console.log(friends);  // -> ['Wee', 'Grace', 'Mike', 'Darren', 'Amanda', 'Candy']
  ```

當 Array 內部的元素還有 Array 時，就被稱為是 array of arrays，這樣的語法是可行的

```Java Script
let arrs = ["Phoebe", ["fb","ig", [[], [], ["Darren"]]], false, []];
```

取值方法

```Java Script
let myArr = [
  ["name", "address", "age"],
  ["Phoebe", "Taiwan", 23],
  ["Darren", "America", 25],
];

console.log(myArr[1][0]);  // -> Phoebe
```

# Function 的時間複雜度

在電腦科學中，演算法的時間複雜度 Time complexity 可以描述該演算法的執行時間

時間複雜度常用大 O (Big O Notation)符號表述，**不包括**這個函式的低階項和首項係數

時間複雜度是想探討問題，`當function 的input 變大，他所需要執行的時間會如何增長`

例如，有 f(x)，執行 function，input 是 f(1)時，需要執行的總時間是 k，假設放大 10 倍，變成 f(10)所需要的總時長是多少?

或是，如果一個演算法對於任何大小為 𝑛（必須比 𝑛0 大）的輸入，它需要 ~~5~~𝑛^3 + ~~3𝑛~~ 的時間 執行完畢，那麼它的漸近時間複雜度是 O(𝑛^3)

為了計算時間複雜度，我們通常會估計演算法的操作單元數量，每個單元執行的時間都是相同的

所以直觀上來說，時間複雜度就是，**在參數逐漸變大的情況下，Function 執行完畢所需要的時間的成長速度**

`舉例`

1. 若調用函數 𝑓(𝑥)，𝑓(10)需要的時間是 5 秒，但 𝑓(50)需要的時間是 125 秒，則參數變大 5 倍，卻導致 𝑓(𝑥)的執行時間成長 25 倍，那麼參數的成長會導致函式執行時間**平方倍成長**，我們就說，𝑓(𝑥)的時間複雜度是 𝑂(𝑛^2)

2. 若調用函數 g(𝑥)，g(10)需要的時間是 5 秒，但 g(50)需要的時間是 25 秒，則參數變大 5 倍，導致 g(𝑥)的執行時間成長 5 倍，那麼參數的成長會導致函式執行時間成**線性成長**，我們就說，g(x)的時間複雜度是 𝑂(𝑛)

3. 若調用函數 h(𝑥)， h(10)需要的時間是 5 秒，但 h (50)需要的時間也是 5 秒，則參數變大 5 倍，導致 h(𝑥)的執行時間沒有任何改變，那麼參數的成長與所需完成的時間**無關**，我們就說，h(x)的時間複雜度是 𝑂(1)

## array 中的常見 method 相對應的時間複雜度

基本概念

- push – 𝑂(1)
- pop – 𝑂(1)
- shift – 𝑂(𝑛)
- unshift – 𝑂(𝑛)

例外!!每個瀏覽器的 JavaScript 引擎內部對於陣列的實現方法略有差異。對於不同大小的陣列，可能會採用其他更好的資料結構，例如 double-linked list, binary search tree (BST)等等，來增強表現，因此速度可能比上面列出的速度快

_補充 :Big O Notation 正式定義 Formal Definition_

> (Ǝc ∈ R)s.t.0 ≤ f(x) ≤ cg(x) is true  
> for all x ≥ n0

直觀上來說，當 x 不斷成長時， f(x)的成長速度不會超過 g(x)的某個常數倍

f(x) = 3x^2 + 7x + 8 = O(x^2) = O(g(x))

# Object 物件

每個 JavaScript 物件都有 properties 以及 method，屬於物件的 function 被稱為**method**

function 是指自訂函數，method 是屬於某物件的 function (例如:array 的 push)

物件的屬性與相對應的值是一種 key-value pair(某個 key 可以對上某個值)，想要獲取物件屬性的方式可以透過 `dot notation` 或是 `[]`

```Java Script
let Phoebe = {
  // 製作新物件，可以設定屬性properties(key-value pair), 行為methods

  // 屬性properties
  first_name: "Phoebe",
  last_name: "Lee",
  age: 23,

  // 行為methods
  sayHi() {
    console.log("Phoebe says hi.");
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

// 執行properties
// 方法1
console.log(Phoebe.first_name);

// 方法2
console.log(Phoebe["first_name"]);

// 執行methods
Phoebe.sayHi();
Phoebe.walk();
Phoebe.speak("今天心情不錯");
```

JavaScript Object 是一種雜湊表 hashtable，物件的獲取都是 O(1)

在 method 中的 **this 關鍵字**指的是調用該方法 method 的物件，用 this 的好處是當值改變，不需要一一到 method 去修改

```Java Script
let Phoebe = {
  first_name: "Phoebe",
  last_name: "Lee",
  age: 23,

  sayHi() {
    console.log(this.first_name + " says hi."); // this指向Phoebe這個物件
  },
}

Phoebe.sayHi();  // -> Phoebe says hi.
```

**!!**function 沒有調用該 function 的物件，則`this`是**指向 window 物件**

```Java Script
function hello() {
  console.log("hello");
  console.log(this); // -> 指向window object (glogal object)
}

hello();
// 純function，不是method
// -> hello
// -> Window {window: Window, self: Window, document: document, name: '', location: Location, …}
```

在 JavaScript 當中的 function、array 其實都是 Object

Array 以及 Function 都是 special type of objects，雖然這樣說，但由以下的程式碼可看出，array 的型態是 object，function 的型態卻是 function(是 JavaScript 的一個 bug)

```Java Script
let arr = [1, 2, 3, 4, 5];
console.log(typeof arr);  // -> object

function hello() {
  console.log("hello world");
}

console.log(typeof hello);  // -> function
console.log(typeof hello());  // -> 不能加()，不然會變成執行後的typeof
```

要如何確認 array 型態呢?

[Array.isArray()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)

`true` if value is an Array; otherwise, `false`

```Java Script
let arr = [1, 2, 3, 4, 5];
console.log(Array.isArray(arr));  // -> true
```

# 迴圈 Loop

迴圈提供一個快速又簡潔的方法來重複地做某件事，各式各樣的迴圈機制提供了不同的方法來定義該迴圈的起始與結束

常見的迴圈有 for, do while, while 等等

若把`return`關鍵字放到 loop 內部，則循環會**馬上停止**

## for loop

`如果已知要做某事幾次，可以使用 for loop`

- Initialization 是在循環開始之前的**計數器**變量聲明
- Condition 是每次循環迭代之前要**評估**的表達式，如果此表達式的計算結果為真，則執行 statement，如果 condition 的計算結果為假，則執行退出循環並轉到 for loop 之後的第一條語句
- Final expression 是在每次循環迭代結束時要**執行**的程式碼，一般用於更新或遞增計數器變量

```Java Script
for (initialization; condition; final expression){
    statement
}
```

```Java Script
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
```

## While Loop  

`不知道loop要執行幾次`  

創建一個循環，執行語句之前評估條件，只要測試條件評估為真，該循環就會執行指定的語句  

```Java Script
while (condition){  // -> condition是boolean值
    statement
}
```  

!!**忘記增加計數器而導致while loop無限循環，則有可能癱瘓電腦CPU**  

這樣會造成無限迴圈  
```Java Script
while (true) {
  console.log("這個程式碼正在被執行...");
}
```  

有i++後，就能正常執行  
```Java Script
// 宣告一個計數器
let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}
```  

## Do while Loop  

創建一個循環，該循環**先執行**指定的statement，**再評估**，直到測試條件為假  

```Java Script
do {
  statement
}while (condition);
```  

```Java Script
let i = 11;

do {
  console.log(i);
  i++;
} while (i < 10);  // -> 11
```  

for while 在語法上是可以互換的  

```Java Script
for (let i = 0; i < 100; i++) {
  console.log(i);
}

let j = 0;
while (j < 100) {
  console.log(j);
  j++;
}

// while在彈性上比for好
```  