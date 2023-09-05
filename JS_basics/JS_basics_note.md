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
