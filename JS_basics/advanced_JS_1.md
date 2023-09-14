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

# Array Methods

以下皆是 higher-order function

- `arr.map(callbackFn)` - 創建一個新`array`，其中填充了在 arr 中的每個元素上調用 callbackFn 的結果，每次 callbackFn 執行時，返回的值都會添加到新 array 內部

  單一資料

  ```Java Script
  let languages = ["Java", "C++", "Python", "JavaScript"];

  let result = languages.map(function (lang) {
    return lang.toUpperCase();
  });
  console.log(result);  // -> ['JAVA', 'C++', 'PYTHON', 'JAVASCRIPT']

  //可以改成error function
  let result = languages.map((lang) => lang.toUpperCase());
  console.log(result);  // -> ['JAVA', 'C++', 'PYTHON', 'JAVASCRIPT']
  ```

  物件資料呈現

  ```Java Script
  const languages = [
    { name: "Python", rating: 9.5, popularity: 9.7, trending: "super hot" },  // -> 後端抓資料時，會以物件形式呈現
    { name: "Java", rating: 9.4, popularity: 8.5, trending: "hot" },
    { name: "C++", rating: 9.2, popularity: 7.7, trending: "hot" },
    { name: "PHP", rating: 9.0, popularity: 5.7, trending: "decreasing" },
    { name: "JS", rating: 8.5, popularity: 8.7, trending: "hot" },
  ];

  let result = languages.map((lang) => {
    return lang.name.toUpperCase();
  });
  console.log(result);  // -> ['PYTHON', 'JAVA', 'C++', 'PHP', 'JS']
  ```

- `arr.find(callbackFn)` - 返回 arr 中滿足 callbackFn 條件的**第一個元素**(也就是第一個使 callbackFn 做 return true 的元素)。 如果沒有值滿足 callbackFn 條件，則返回 **undefined**

  ```Java Script
  let result = languages.find((lang) => {
    return lang.popularity > 9.5;
  });
  console.log(result); // -> {name: 'Python', rating: 9.5, popularity: 9.7, trending: 'super hot'}

  let result2 = languages.find((lang) => {
    return lang.popularity > 9.8;
  });
  console.log(result2); // -> undefined
  ```

- `arr.filter(callbakcFn)` - **過濾**出在給定 arr 中通過在 callbakcFn 會 return `true`元素。Return value 是 A shallow copy of a portion of arr

  ```Java Script
  let result = languages.filter((lang) => {
    return lang.rating >= 9.2;
  });
  console.log(result);
  //-> [
  //     {name: 'Python', rating: 9.5, popularity: 9.7, trending: 'super hot'},
  //     {name: 'Java', rating: 9.4, popularity: 8.5, trending: 'hot'},
  //     {name: 'C++', rating: 9.2, popularity: 7.7, trending: 'hot'}
  //   ]
  ```

- `arr.some(callbackFn)` - 給定 callbackFn ，測試 arr 中是否**至少有一個元素**，通過 callbackFn 的測試(是否至少有一元素會 return true)  
  `some()`的 return type 是 `boolean`

  ```Java Script
  let result = languages.some((lang) => lang.popularity <= 6);
  console.log(result);  // -> true
  ```

- `arr.every(callbackFn)` - 給定 callbackFn ，測試 arr 中是否**所有的元素**都通過 callbackFn 的測試(是否所有的元素都會 return true)  
  `every()`的 return type 是 `boolean`

  ```Java Script
  let result = languages.every((lang) => lang.popularity > 5);
  console.log(result);  // -> true
  ```

# map, forEach 差別比較

## map

**何時使用:要創建新 arr，新 arr 需要使用舊 arr 每個元素的值做運算後，再去把運算結果集合成 arr**

[mdn array.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

**creates a new array**，其內容為原陣列的**每一個元素**經由回呼函式運算後所回傳的結果之集合

-> return A new array with each element being the result of the callback function.

```Java Script
let arr = [1, 2, 3, 4, 5, 6, 7];

let newArr = arr.map((i) => i ** 2);
console.log(newArr);  // -> [1, 4, 9, 16, 25, 36, 49]
```

## forEach

**何時使用:如果只是要對一個 arr 當中的每個元素去執行某 function**

[mdn array.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

executes a provided function once for each array element 對 arr 中的元素在 func 中執行一次

-> return `undefined`

```Java Script
let arr = [1, 2, 3, 4, 5, 6, 7];

let newArr = arr.forEach((i) => {
  console.log(i ** 2);  // -> [1, 4, 9, 16, 25, 36, 49]
});

console.log(newArr);  // -> undefined
```

# JS 內建排序函式

自己的排序:mergesort, quicksort, heap sort -> 內建無法滿足要求、希望系統優化

若想要把 array 內部的元素由小到大排序，可用 JS 內建排序的`sort()`方法

sort() 方法對`array`的元素進行就地排序，也就是說，array 會被**永久改變** (注意，絕大多數的 JS 內建 method 並不會改變調用此 method 的變數的值。例如，String 的 toUpperCase()就是其中一種)

語法

```Java Script
sort()
sort(compareFn)
```

```Java Script
let myName = "Phoebe";
myName.toUpperCase();
console.log(myName);  // -> Phoebe，值沒有被更換

let myArr = [1, 5, 3, 2, 4, 7, 8, 0];
myArr.sort();
console.log(myArr);  // -> [0, 1, 2, 3, 4, 5, 7, 8]，arr被永久更換
```

若希望保留未經過排序的 array，則需要先製作一個完整的複製品

```Java Script
let myArr = [1, 5, 3, 2, 4, 7, 8, 0];
let mySortedArr = [...myArr];
mySortedArr.sort();
console.log(myArr);  // -> [1, 5, 3, 2, 4, 7, 8, 0]
console.log(mySortedArr);  // -> [0, 1, 2, 3, 4, 5, 7, 8]，從小到大
console.log(mySortedArr.reverse());  // -> [8, 7, 5, 4, 3, 2, 1, 0]，從大到小
```

## 補充:compareFn

compareFn 是定義排序順序的函數。 如果省略，則將 array 元素按照 JavaScript 預設方式排序(數字，由小到大 / 字串，由 a 到 z)

若我們要自己提供 compareFn，則此 function 需要有兩個 parameter a, b，而`sort()`會根據 compareFn 的 return value 來決定排序順序

| compareFn(a, b) return value |           sort order           |
| :--------------------------: | :----------------------------: |
|             > 0              |         Sort a after b         |
|             < 0              |        Sort a before b         |
|            === 0             | Keep original order of a and b |

```Java Script
let num = [8, 4, 3, 5, 6, 1, 0];

num.sort((a, b) => {
  return a - b;
});
console.log(num); // -> [0, 1, 3, 4, 5, 6, 8]，由小到大(升序)

num.sort((a, b) => {
  return b - a;
});
console.log(num); // ->  [8, 6, 5, 4, 3, 1, 0]，由大到小(降序)
```

用長度判斷

```Java Script
let fruits = ["Watermelon", "Apple", "Banana"];
fruits.sort((a, b) => {
  if (a.length > b.length) {
    return 1;
  } else {
    return -1;
  }
});
console.log(fruits);  // ->  ['Apple', 'Banana', 'Watermelon']

let fruits = ["Watermelon", "Apple", "Banana"];
fruits.sort((a, b) => {
  if (a.length > b.length) {
    return -1;
  } else {
    return 1;
  }
});
console.log(fruits); // ->  ['Watermelon', 'Banana', 'Apple']
```

排序的時間和空間複雜度不能被保證，因為它取決於每個瀏覽器的 JS 引擎如何實現 sort()。但以下為幾個參考方向：

- V8 引擎(chrome, node.js) -> Quicksort or Insertion Sort (for smaller arrays)，或使用 AVL Tree
- Firefox -> Merge sort
- Safari -> Quicksort, Merge Sort, or Selection Sort (depending on the type of array)

# for of Loop -> 元素

創建一個迴圈，去循環可迭代對象(iterable)內的**每個元素** (迭代 iteration，迴圈轉一次就是一次的 iteration)

可迭代對象包括：string、array、 array-like object（例如：NodeList、HTMLCollection）、TypedArray、Map、Set 和 user-defined 的 iterable

<font color=red>注意 </font>object 並不是 iterable

```Java Script
for(i of iterable){

}
```

```Java Script
let numbers = [10, 20, 30];

//方法1
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);  // -> 10, 20, 30
}

//方法2
numbers.forEach((n) => {
  console.log(n);  // -> 10, 20, 30
});

//方法3
for (n of numbers) {
  console.log(n);  // -> 10, 20, 30
}
```

```Java Script
let myString = "Phoebe";
for (let i of myString) {
  console.log(i);  // -> P, h, o, e, b, e
}
```

# for in Loop -> 屬性

for in Loop 創建一個迴圈，去循環一個 JS 物件中所有的可枚舉**屬性**(enumerable properties) -> 可以把屬性一個個舉出來

對於`object`來說，enumerable properties 就是**keys**

```Java Script
let Phoebe = {
  name: "Phoebe Lee",
  age: 23,
};

// for in Loop 每次循環會循環他的可枚舉屬性(enumerable properties) -> 他的key(name, age)
// key
for (let property in Phoebe) {
  console.log(property); // -> name, age
}

// value
for (let property in Phoebe) {
  console.log(Phoebe[property]); // -> Phoebe, 23
}
```

對於`array`來說，enumerable properties 就是**indices**(index 的複數)

```Java Script
let num = [100, 44, 22];

for (let i in num) {
  console.log(i); // -> 0, 1, 2
}

for (let i in num) {
  console.log(num[i]); // -> 100, 44, 22
}
```

對於`String`來說，enumerable properties 也是**indices**
