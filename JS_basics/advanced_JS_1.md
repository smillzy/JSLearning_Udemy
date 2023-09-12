# JavaScript 引擎

JavaScript 並不是由任何程式語言所寫成，只是一個由歐洲電腦製造協會(ECMA)所訂的標準

瀏覽器內部的 JavaScript 引擎會負責遵從 ECMA 所訂的標準，理解與處理 JavaScript 程式碼，讓 JavaScript 程式碼可以運作

最有名的標準更新在 2015 年，被稱為**ECMA2015**或是**ES6**

# NaN

表示 Not-A-Number，資料類型進行一些數學計算時，若**無法計數值**，就會出現

type:number

```Java Script
console.log(typeof NaN);  // -> number
```

# Infinity

正無窮大，負無窮大是 `-Infinity`

type:number

```Java Script
console.log(typeof Infinity);  // -> number

console.log(Infinity > 99999999999);  // -> true
```

任何乘以 Infinity 的正整數都是 Infinity，除以 Infinity 的任何數都是 **0**

```Java Script
console.log(5 / 0);  // -> Infinity

console.log(Infinity * 10);  // -> Infinity
```

# 兩個 array 相加

[mdn array concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

```Java Script
let num1 = [1, 2, 3];
let num2 = [4, 5, 6];
//將num1, num2串成array[1, 2, 3, 4, 5, 6]

//方法1
let result = num1.concat(num2);
console.log(result);

//方法2(較常見)
console.log([...num1, ...num2]);
```

## Spread Syntax 用於 array, function invocation

擴展語法 Spread Syntax，允許在需要**零個或多個參數**argument（例如，function invocation 會需要）或**元素**（例如，array 的內部元素 ）的地方，去擴展 array 內部的元素

```Java Script
myFunction(a, ...iterableObj, b)  // -> iterableObj，可以做迭代的Obj就是iterable
[a, ...iterableObj, b]

//舉例
const parts = ["肩膀", "膝蓋"];
const otherParts = ["頭", ...parts, "身體", "腳"];

console.log(otherParts);  // -> ['頭', '肩膀', '膝蓋', '身體', '腳']
```

- 可以複製 array

  ```Java Script
  const arr = [1, 2, 3];
  const arr2 = [...arr];  // -> ...arr複製出的arr並不是copy by reference

  arr2.push(4);

  console.log(arr);
  console.log(arr2);
  ```

- array concat

  ```Java Script
  let arr = [1, 2, 3];
  let arr2 = [4, 5, 6];

  console.log([...arr, ...arr2]);  // -> [1, 2, 3, 4, 5, 6]
  ```

- 在 function 裡擴展

  ```Java Script
  function sum(x, y, z) {
    return x + y + z;
  }

  let arr = [1, 2, 3];
  console.log(sum(...arr));  // -> 6
  ```

- 當作部分 argument

  ```Java Script
  function sum(a, b, c, d, e) {
    return a + b + c + d + e;
  }

  let arr = [1, 2, 3];
  console.log(sum(10, ...arr, 5));  // -> 21，a = 10, b, c, d = arr, e = 5
  ```

## Rest Parameters 用於 function definition

收集多個元素並將它們「壓縮」為單個 JS array

```Java Script
function f(a, b, ...theArgs) {
    //...
}

//舉例
function sum(...theArgs) {
  console.log(theArgs);
}
sum(1, 2, 3, 4, 5, 6);  // -> [1, 2, 3, 4, 5, 6]

//把array值全加起來
function sum(...theArgs) {
  let total = 0;
  for (let i = 0, i < theArgs.length; i++){
    total +- theArgs[1];
  }

  return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));  // -> 55
```

# Data Types

## Primitive

string, boolean, number 都是 Primitive Data Type，Primitive Data Type 代表著它們**不是**Objects，每個 Primitive Data Types 都**沒有**自己的 attributes 和 methods

此外， 裝有 Primitive Data Types 的 variable 確實擁有數值，而不僅僅是對其數值的記憶體位置的 reference

## Reference

Objects, array 都是 Reference Data Type。 Reference Data Type 變數中，儲存的值是 Reference，也就是記憶體的位址，**指向儲存真實內容**的記憶體區塊的位置

## 強迫轉換 Primitive Coercion

既然 Primitive Data Type 沒有自己的 attributes 和 methods，為何我們使用 string.length 屬性，或是 number.toFixed()這個 method 呢？

當 Primitive Data Type 使用 attributes 和 methods 時，JavaScript 將值自動把數值裝箱到**包裝物件 wrapper object**中，並改為訪問該 wrapper object 上面的屬性

例如，”foo”.includes(“f”) 會把”foo”放到 _new String(“foo”)_ (Java 創建新的 string 物件)，並且執行 new String(“foo”)從 String 繼承而來的 String.prototype.includes()

這種自動裝箱行為在 JavaScript 代碼中是*不可觀察*的

如果一開始在創建 String 的時候，就使用 wrapper object 來製作也可以。但這樣做會造成 RAM 的*非必要耗損*，且 wrapper object 做物件時間遠較製作 primitive data type 來的**更久**，code 完成時間會被拖延，所以 MDN 強烈不推薦使用這種寫 code 的方式

```Java Script
//primitive data type
let myName = "Phoebe";

console.log(typeof myName);  // -> string

//wrapper object
let myName = new String("Phoebe");

console.log(typeof myName);  // -> object
```

測試一下時間

```Java Script
const { performance } = require("perf_hooks"); // node.js

//wrapper object
let startTime = performance.now();

for (let i = 0; i < 10000000; i++) {
  let a = new String("jakdsfjlkajlskdfjaksljfakls;dfja;ls");
}

let endTime = performance.now();
let timeDiff = endTime - startTime;
console.log("一千萬次的String wrapper object製作需要" + timeDiff);  // -> 433.11809998750687毫秒

//primitive data type
startTime = performance.now();
for (let i = 0; i < 10000000; i++) {
  let a = "jakdsfjlkajlskdfjaksljfakls;dfja;ls";
}
endTime = performance.now();
timeDiff = endTime - startTime;
console.log("一千萬次的String宣告需要" + timeDiff);  // -> 13.569000005722046毫秒
```

# String Comparison

String 之間的比較都是採用字典式的比較法 compared lexicographically，在英文字典中，排列單詞的順序是先按照第一個字母以**升序排列**（即 a、b、c……z 的順序）；如果第一個字母一樣，那麼比較第二個、...至後面的字母

JavaScript 的 String 之間的比較中，在字典順序中較後面者會大於較前面者

- ”z” > “y” > … > “b” > “a”

```Java Script
console.log("b" > "a");  // -> true
console.log("b" > "a0011ccdd");  // -> true
console.log("abandon" < "apple");  // -> true
```

- ”9” > “8” > … > “2” > “1”

```Java Script
console.log("12" < "2");  // -> true
```
