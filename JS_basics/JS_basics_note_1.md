JavaScript 可以直接被寫在網頁的 HTML 中，並在頁面加載時自動運行

JavaScript 本身跟 Java 關聯不大

JavaScript 成為一種完全獨立的語言，擁有自己的規範，稱為 ECMAScript

Vanilla JavaScript 是指使用**純 JavaScript** 而**不需要**任何額外的 library 或框架

常見的 JavaScript library 有 jQuery

每個瀏覽器有自己的 JavaScript 引擎，用來讀取並編譯 JavaScript 程式碼  
[若要確認某個瀏覽器的 JavaScript 引擎是否有支援某種功能](https://caniuse.com/)

# &lt;script&gt;放在哪裡

被放在 HTML 頁面的最下方

JavaScript 放在 HTML 正文的底部時，它會在任何 JavaScript 加載之前讓 HTML、CSS 有時間加載

先讓瀏覽器可以加載 HTML、CSS， 用戶無需等待 JavaScript 被解析完成，即可在網頁中看到某些內容

# 常見 JavaScript 函數

若要滿足一個函數，要符合一個 input 對上一個 output

- console.log() 將 message 輸出到 Web 控制台，message 可以是單個 string，也可以是任何一個或多個 JavaScript Object

- window.alert() 指示瀏覽器顯示帶有可選消息的對話框，並等待用戶關閉對話框

- window.prompt() 指示瀏覽器顯示帶有可選消息的對話框，提示用戶輸入一些文字，並等待用戶提交文字或取消對話框

# Lexical Structure 基本規則

是一種語言的最低級語法

用於指定如何用該語言編寫程式

程式語言 Programing language -> 語法 syntax
-> 有含意的單字 reserved words

- Case Sensitive JavaScript 中的大小寫是有差別的 (upper case 大寫， lower case 小寫)

- 空白鍵、換行鍵等等在 JavaScript 當中會**全部被忽略**

- JavaScript 的當行註解是//，多行則是包裹在/\*\*/內部

- 變數名稱需要由文字、underscore \_ 、dollar sign $ 當作開頭(不能用數字開頭)

- 內部有關鍵字(reserved words 保留字, keywords)，例如：null, of, if, then, in, finally, for, while, break, continue, switch, try, let, const, var 等等，不能當作變數名稱

- 使用 Unicode 字元集合，所以 String 內部可由任何 Unicode 文字組成

- Semicolons -> ; 可用來分隔程式語句，Semicolons 的使用是 optional(選擇性)

# 變數 variable 與賦值 assignment

變數 variable <-> 常數 ex:𝝅

變數是一個可以存儲值的容器，變數內部的值可以不斷改變

賦值 assignment -> 賦予一個值

**=**與數學中使用的等號概念不同，= -> 把等號右邊的數據放到等號左邊

語法糖 syntax sugar(更便捷快速)支援將 x = x + 1 更改為 x += 1

想要在 JS 創造一個變數，我們需要宣告變數 declare variable / variable declaration

## 先確認

此變數之後是否有可能被修改

如果有宣告變數，程式碼多時才不易出錯，也比較不會跟 global object 混淆

- 若變數的值會變動，則用**let**來宣告變數

- 若變數的值**不會**變動，則用常數**const**(constants)來宣告變數

- 請勿使用 var 宣告變數(之後解釋)

## 特別注意

- 用**const**來宣告的變數，一定需要馬上賦予初始值 initializer

- let 不需要，宣告了變數，但還沒有賦值，則變數的值是未定義 undefined

- 用 const, let 宣告過的變數，都不能重複宣告 redeclaration is not allowed

- const 不能做重複賦值 reassignment is not allowed

|       | 重複宣告 redeclaration | 重複賦值 reassignment | 初始值 initializer |
| :---: | :--------------------: | :-------------------: | :----------------: |
|  let  |           X            |           V           |         X          |
| const |           X            |           X           |         V          |

JavaScript 引擎中有一個稱為 garbage collector 的後台程式。 它**監視所有物件**並刪除那些變得無法訪問的 object  
 (程式碼中有些沒用變數裝，就會被留在程式中，garbage collector 回收之)

# 數據/資料類型 data type

有 7 種基本數據類型 primitive data type

- Number 整數與帶小數點的數字 <font color=gray>ex.10, -3, -3.14 </font>
- BigInt 任意長度的**整數**
- String 字符串 放在" "或' '中
- Boolean true 或 false 兩種值
- null 用來代表某個**故意不存在**的值
- undefined **未被賦值**的變數
- symbol unique identifier

第 8 種 -> 物件 object non-primitive data type (可能是 array, object, function)

## Number

- 介在-2<sup>253</sup>到 2<sup>253</sup>之間，使用大於此的整數值，則可能會丟失數字的精度

- 支援的運算符號包含加法、減法、乘法 、除法、餘數 remainder operator、指數 exponentiation operator、++、--、+=、-=、/=、\*=

### number method

JavaScript 是個物件導向 OOP 的程式語言，所以 JavaScript 當中的數字可被視為是 物件(會有屬性跟 methods)

- toString() return 一個數字的**String**

  ```Java Script
  let age = 27;
  console.log(typeof age); // ->number
  console.log(age.toString()); // ->27
  console.log(age.toString() + age); // ->2727
  console.log(typeof age.toString()); // ->string
  ```

- toFixed(n) return 被轉換後的數字，到小數點後第 n 位數

  ```Java Script
  const pi = 3.1415926;
  console.log(pi.toFixed(2)); //3.14
  console.log(typeof pi.toFixed(2)); // ->string
  ```

補充:

- 如果忘記加()

  ```Java Script
  let x = 10; //x is a number (x ia an object)

  console.log(x.toString);
  //如果忘記加() -> ƒ toString()，告訴你對x來說，toString是一個method or function
  ```

- 二進制不能精確表示所有小數，可能會導致意外結果(與 floatinf points 有關)
  例如 : 0.1 + 0.2 === 0.3 會 return false

## string

- 由字母或數字串接而成

- 兩個 string 之間會用 + 串接 concatenation(concat)

- 兩個 string 之間不能做 - 、 \* 、 / 運算，會出現 NaN (Not a Number)

  如果把 String 與 Number 相乘會得出 NaN(乘法只會發生在數值之間)

  ```Java Script
  let first_name = "Phoebe";

  console.log(first_name * 5);
  ```

- <font color=red>String 與 Number 之間，若是做 + 運算，則會變成 String 與 String 之間的串接</font>

  ```Java Script
  let x = 10; //x data type is number
  let y = "10"; //y data type is string

  console.log(x + x); // ->20
  console.log(y + y); // ->1010
  ```

  補充:程式碼讀取方式 -> 從上到下讀取，從左到右讀取

  ```Java Script
  let n1 = 20;
  let n2 = 30;
  let name = "Phoebe";
  let n3 = 10;
  let n4 = 15;

  console.log(n1 + n2 + name); // ->50Phoebe

  console.log(n1 + n2 + name + n3 + n4);
  //先變成50Phoebe(string)，加上n3後->50Phoebe10，再加上n4後->50Phoebe1015
  ```

- \n 可以換行

  ```Java Script
  console.log("Phoebe\nLee");
  ```

### Attributes and Methods

[String_mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#instance_properties)

#### Attributes (Properties)

- length - return String 的長度

  ```Java Script
  let str = "Phoebe";
  console.log(str.length); // -> 6

  let str = "";
  console.log(str.length); //empty string -> 0
  ```

- [n] - return index 第 n 項的字，索引 index (編號) 從 <font color=red>0</font> 開始計算

  ```Java Script
  let str = "Phoebe";
  console.log(str[0]); -> P

  //str長度為6，str最後一個文字的index會是5
  //對於任一個str，若str長度為x，則最後一個文字的index會是x - 1

  //若要取e，以下兩種方法
  console.log(str[5]);
  console.log(str[str.length - 1]);

  //沒有寫正確的值，會得到undefined，-1也是undefined
  console.log(str[6]);
  ```

#### Methods

- slice(indexStart [, indexEnd])

  - slice -> 提取字符串的一部分並將其作為新 String 返回，而不修改原始字符串

    ```Java Script
    let str = "Phoebe"; // o index -> 2
    console.log(str.slice(2)); // -> oebe
    ```

  - indexStart 是 inclusive

  - indexEnd 是 optional **exclusive**

    ```Java Script
    let str = "Phoebe"; // o index -> 2
    //indexEnd is exclusive
    console.log(str.slice(0, 4)); // -> Phoe
    ```

- indexOf(substring) – return substring(子字串) 的 index 位置。若找不到 substring，則 return -1

  ```Java Script
  let str = "Phoebe";
  console.log(str.indexOf("b")); // -> 4
  console.log(str.indexOf("ebe")); // -> 3
  console.log(str.indexOf("k")); // -> -1
  ```

- toUpperCase() - return 轉換為大寫的 String。 此方法<font color=red>不會影響</font> String 本身

- toLowerCase() - return 轉換為小寫的 String。 此方法<font color=red>不會影響</font> String 本身

  要強制轉換的方法

  ```Java Script
  let str = "Phoebe";
  //reassignment
  str = str.LowerCase();
  console.log(str); // -> phoebe
  ```

- split(pattern) - 接受一個 pattern 並通過搜索將一個字符串分成一個有序的 array，然後 return 該 array

  Pattern 可以是 regular expression

  ```Java Script
  let sentence = "Today is a good day";

  let result = sentence.split(" ");
  console.log(result); // -> 'Today', 'is', 'a', 'good', 'day'

  let result2 = sentence.split("o");
  console.log(result2); // -> 'T', 'day is a g', '', 'd day'
  ```

- startsWith(s) – 確定 String 是否以指定字串 s **開頭**，根據需要返回 true 或 false

- endsWith(s) – 與 startsWith()相同，但確認**結尾**

- includes(str) – return true 如果 String 內部包含 str

- charCodeAt(n) - 返回一個介於 0 和 65535 之間的整數，表示給定索引處 n 的 UTF-16 code unit

  通常用在 project、處理文字、做比對、交叉運算、資料連接、二進字運算

  ```Java Script
  let sentence = "Today is a good day";

  console.log(sentence.charCodeAt(0));
  // 0 -> T， T 這個字在UTF-16字元編碼裡面，他所相對應的數字編碼是多少 -> 84
  ```

## Boolean

代表兩個值之一：true 或 false

需要注意的是 "true"(字串) true(布林值) 這兩個是**不一樣**的東西

一元運算符 Unary operator 「!」可以將 Boolean 的值反轉

```Java Script
console.log(!true);  // -> false
console.log(!false);  // -> true
```

typeof 可以用來確認資料類型

```Java Script
console.log(typeof true);  // -> boolean
```

## Undefined

已經宣告變數，卻沒有賦予 initializer 時，就會出現 undefined

undefined 也是 JavaScript 中的 functions 的預設 return value

```Java Script
let x;
console.log(x);  // -> Undefined (x is waiting for assignment，現在尚未放東西進去)
```

## Null

代表某個故意不存在的值

```Java Script
let y = null;
console.log(y);  // -> null (y has nothing inside，刻意宣告為空值)
```

# 運算符 Operators

兩個運算元 operand 與一個運算符 operator 可以算出一個數字

運算符中，常見的有：

- 賦值 assignment operator
- 比較 comparison operator
- 邏輯 logical operator
- 屬性 typeof operator (unary)
- 否定 negation operator (unary) -> !
- 遞增 increment operator (unary) -> x++
- 遞減 Decrement operator (unary) -> x--
- 位元 bitwise operator
- 算術 arithmetic operator

## comparison operator

運算元 operand 是兩個任意資料型態，且運算結果為<font color=red>Boolean 值</font>

<font color=red>**operand (number, string, boolean) , result (boolean)**</font>

- == returns true if the operands are equal

  ```Java Script
  console.log(3 == 3);  // -> true
  console.log(3 == 6);  // -> false, comparison operator
  console.log(3 = 6);   // ->        assignment operator
  ```

- != returns true if the operands are **not equal**

- === returns true if the operands are **equal** and of the **same data type**

  ```Java Script
  console.log(3 == "3");  // -> true， == 代表去檢查運算元的值
  console.log(3 === "3"); // -> false ， === 代表去檢查運算元的值，也檢查data type
  ```

- !== returns true if the operands are of the same type but not equal, or are of different type

  ```Java Script
  console.log(3 !== "3");  // -> true
  ```

- \> returns true if the left operand is greater than the right operand

- \>= returns true if the left operand is greater than or equal to the right operand

- < returns true if the left operand is less than the right operand

- <= returns true if the left operand is less than or equal to the right operand

| 運算子 |   說明   |  範例  | 運算結果 |
| :----: | :------: | :----: | :------: |
|   ==   |   等於   | 6 = 3  |  false   |
|   !=   |  不等於  | 6 <> 3 |   true   |
|   <    |   小於   | 6 < 3  |  false   |
|   >    |   大於   | 6 > 3  |   true   |
|   <=   | 小於等於 | 6 <= 3 |  false   |
|   >=   | 大於等於 | 6 >= 3 |   true   |

## logical operator

兩個任意資料型態，且運算結果為 Boolean

| 運算子 |                              說明                               |
| :----: | :-------------------------------------------------------------: |
|   !    |                        NOT，回傳相反的值                        |
|   &&   |             AND，兩個運算元都為 true，運算式為 true             |
|  \|\|  | OR，兩個運算元<font color=red>任一</font>為 true，運算式為 true |

|   A   |   B   | A && B | A \|\| B |
| :---: | :---: | :----: | :------: |
| true  | true  |  true  |   true   |
| true  | false | false  |   true   |
| false | true  | false  |   true   |
| false | false | false  |  false   |

```Java Script
// comparison & logical 結合
console.log(5 > 3 && 100 > 99);  // -> true
```

### 補充說明

&& 跟 \|\| 基本上都是 Boolean，如果不是，以下是他的規則

- &&  
  If the left hand side is `true`, then it evaluates as the right hand side

  ```Java Script
  console.log(3 && 10);  // -> 10
  console.log(-3 && -10);  // -> -10
  ```

  If the left hand side is not true, then it evaluates as the left hand side

  ```Java Script
  console.log(0 && -100);  // -> 0
  console.log(0 && -0); // -> 0
  ```

- \|\|  
  If left hand side can be converted to `true`, returns left hand side

  ```Java Script
  console.log(6 || 100);  // -> 6
  ```

  else, returns right hand side

  ```Java Script
  console.log(NaN || 100);  // -> 100
  ```

這個在 JS 的後端常見，因為有時會想去顯示某兩個變數值，而且也不知道誰是 Truthy 或 Falsy

例如 -> 在撈資料時

```Java Script
let data = "Phoebe"
console.log(data || "資料讀取失敗");  // -> Phoebe (Truthy)

let data = ""
console.log(data || "資料讀取失敗");  // -> 資料讀取失敗 (Falsy)
```

## bitwise operator

[binary to decimal](https://www.rapidtables.com/convert/number/binary-to-decimal.html)

decimal 系統中，可用數字集合是：{0、1、2、3、4、5、6、7、8、9} -> 總共有 10 個，十進位

binary 系統中，可用數字集合是：{0, 1} -> 總共有 2 個，二進位

bitwise -> bit 就是 binary digit 二進制裡的數字，bitwise 就是指每 2 個一起看或運算

Bitwise Operators 將數字 operand 視為**32 bits**的數字，並且對每個 bit 進行運算

- a & b - 在兩個 operand 的對應位都是 1 的位置返回一個 1

  ```Java Script
  let a = 10;  // -> 二進制1010
  let b = 9;  // -> 二進制1001
  console.log(a & b);  // -> 十進制8 (true是1，false是0，二進制1000)
  ```

- a | b - 在兩個 operand 的對應位都是為 0 的位置返回一個 0

  ```Java Script
  console.log(a | b);  // -> 十進制11 (二進制1011)
  ```

- a **^** b – 在兩個 operand 的**對應位相同**的每個位置返回 0 (**XOR 運算**超級重要!!) -> exclusive or (⊕)

  |  A  |  B  | A ⊕ B |
  | :-: | :-: | :---: |
  |  0  |  0  |   0   |
  |  1  |  0  |   1   |
  |  0  |  1  |   1   |
  |  1  |  1  |   0   |

  ```Java Script
  console.log(a ^ b);  // -> 十進制3 (二進制0011)
  ```

下面三個是做 CPU 比較容易用到

- ~a – 反轉 operand 的每個 bit

  ```Java Script
  let a = 10;  // -> 二進制1010
  console.log(~a);  // -> -11 (二進制0101，十進制5)

  ```

- a << b - 將二進制表示中的 a 向左移動 b 位，丟棄任何被移出的 bits

  ```Java Script
  let a = 10;  // -> 二進制1010
  console.log(a << 1); // -> 十進制20 (二進制10100)
  ```

- a >> b -將二進制表示中的 a 向右移動 b 位，丟棄任何被移出的 bits

  ```Java Script
  let a = 10;  // -> 二進制1010
  console.log(a >> 1); // -> 十進制5 (二進制101)
  ```

### 何時會用到 Bitwise Operators

- 做編碼運算
- 資料傳出 sockets programming, ports
- 資料加密、SHA 函數、bcrypt
- 作業系統、CPU
- Finite State Machine
- Graphics，例如影像處理、人工智能

| 運算子 |   A   |   B   |   C   |     D     |  範例  |   結果   |    說明    |
| :----: | :---: | :---: | :---: | :-------: | :----: | :------: | :--------: |
|   ~    | 1(01) |       |       |           |   ~A   |  -2(10)  |  NOT 運算  |
|   <<   |       |       | 3(11) |           |  C<<2  | 12(1100) |  左移運算  |
|   >>   |       | 2(10) |       |           |  B>>1  |   1(1)   |  右移運算  |
|  >>>   |       |       |       | 16(10000) | D>>>1  | 8(0100)  | 無符號右移 |
|   &    | 1(01) |       | 3(11) |           | A & C  |  1(01)   |    AND     |
|   ^    | 1(01) | 2(10) |       |           | A ^ B  |  3(11)   |    XOR     |
|   \|   | 1(01) | 2(10) |       |           | A \| B |  3(11)   |     OR     |

- [位元轉換練習](bit_flipping.md)

|  位元   |             二進制             |     十進制     |
| :-----: | :----------------------------: | :------------: |
| 1 bite  |      有 {0, 1} 兩種可能性      |    代表 0~1    |
| 2 bites | 有 {00, 01, 10, 11} 四種可能性 |    代表 0~3    |
| n bites |        有 2^n 種可能性         | 代表 0~2^n - 1 |

1 bite -> 2 => 2^1 一定會出現在 2 bites 10
2 bites -> 4 => 2^2 一定會出現在 3 bites 100
3 bites -> 8 => 2^3 一定會出現在 4 bites 1000

# if statement

if 語句是最簡單的**決策**語句，用於決定是否執行某個語句或語句塊(程式碼)

如果條件為`true`，則執行一個語句塊，否則不執行

有三大種 if statement:

```Java Script
if (條件condition) statement1;
// condition datatype -> boole, if true 執行 statement1

// example
if (true) console.log("This is true.");

// comparison & logical & if statement 結合 (有兩種寫法)
if (5 > 3 && 6 < 10) console.log("This is true.");

if (5 > 3 && 6 < 10) {
  console.log("This is true.");
}
```

```Java Script
if (condition) {
  statement1;
} else {
  statement2;
}

// example
if (true){
    console.log("Condition is true.");
}else{
    console.log("Condition is false.");
}
```

```Java Script
if (condition1) {
  statement1;
} else if (condition2) {
  statement2;
} …
 	else {  // optional
  statementN
}

// example
let age = 12;
if (age <= 18);{
    console.log("你是兒童");
}else if (age > 18 && age <= 35){
    console.log("你是青壯年");
}else{
    console.log("你不是兒童也不是青壯年");
}
```

## 小練習

`題目`
請製作一個系統。此系統可以讓使用者輸入年齡，根據年齡打印出相對應的電影票價。規則如下:  
12 歲(含)以下為兒童票，票價 100 元。  
12 歲以上到 65 歲以下(含)為成人票，票價 250 元。  
65 歲以上為敬老票，票價 150 元。

`解答`

[Java Script string to number](https://stackoverflow.com/questions/1133770/how-to-convert-a-string-to-an-integer-in-javascript)

```Java Script
let age = prompt("請輸入你的年齡:");

age = Number(age);  // convert string to number
console.log(Number("我今年二十三歲"));  // -> NaN

if (age >= 0 && age <= 12) {
  alert("兒童票100");
} else if (age > 12 && age <= 65) {
  alert("成人票250");
} else (age > 65 && age <= 125){
  alert("敬老票150");
}
```

# Truthy and Falsy Values

在 JavaScript 中，每個值(datatype)在 Boolean context (T 或 F 的上下文)之下，都可以被視為是 true 或是 false

常見的 Boolean context 有 **if statement** 以及 **Logical Operators** 運算

Boolean context 之下，JavaScript 會自動幫每個值做強制轉型 type coercion

所有 JavaScript 當中的 Falsy Values(Boolean context 之下被視為 false)全部是：

- false
- 0, -0, ~~0n (BitInt)~~
- “ ”, ‘ ’, \` \` (所有的 empty string)
- null
- undefined
- NaN

```Java Script
let x = 0;

if (x) {
  console.log("x is true");
} else {
  console.log("x is false");
}
// -> x is false
```

除此之外的都是 truthy values，包含`[] empty array`, `{} empty object`

# Coding 慣例 Convention and 限制 Restrictions

## Convention

- 變數與函數的名稱，全部小寫

  若名稱由兩個以上的單字組成，則使用 camel**C**ase (也可使用 underline \_)

- Operators 周圍加上空白鍵
- 用**分號**結束一個簡單的 statement
- 常數`Const`全部使用**大寫** (這樣在撰寫時，就能知道該值是無法更動的)
- Class 由大寫字母開頭

## Restrictions

- 變數、函數名稱不可由數字開頭 (只能文字、\_、$)
- 變數、函數名稱不可包含 hyphen "-" (Hyphen 已經預留給數字做減法運算)
- 變數、函數名稱不可使用 reserved words
