# 靜態網頁 static websites

靜態網頁中的內容就是 HTML, CSS, Java Script 所創建的網頁

靜態網站上的每個頁面都存儲為單個 HTML 文件，該文件完全按原樣從伺服器直接傳送到用戶端

如果把靜態網頁部屬到雲端上，例如放到 netlify(伺服器 server)，netlify 只需將存好的資料送到客戶端 client 就好

優點：

1. 更快的頁面加載速度

由於網頁都以預先製作完成，伺服器的工作只是傳送文件， 無需從數據庫找資料或在 server side script 做驗證等工作，所以加載速度會比動態網頁快速。由於頁面加載速度是谷歌評估網站性能的關鍵部分(對 SEO 和排名性能有影響)，這個優點不應被低估

2. 創建與部署快速

靜態網站的創建和發布速度更快，因為它們**複雜度較低**，並且不需要有組織的連接到資料庫。網頁製作完成後，靜態網頁的部署較簡單，因為只需要將文件放置到伺服器上即可。相對的，動態網頁需要避免資料庫被駭客入侵、攻擊，設定伺服器端腳本與資料庫都需要額外工作

3. 安全性較高

靜態網頁不與數據庫連接，也不使用外部套件。數據庫與外部套件都可以成為攻擊的常見入口點

缺點：

1. **有限的**可擴展性

可擴展性 -> 做好一個模板，連結數據庫之後，數據庫有甚麼，網頁就會有不同樣子

雖然可以使用靜態網站構建數百個頁面，但這始終是一個緩慢而漫長的過程。網頁因為沒有連結儲存使用者資訊的數據庫，無法針對每個使用者提供客製化的內容

2. 管理效率低

靜態網站的創建速度可能更快，但管理起來可能更耗時。 因為需要*逐頁編輯*靜態網站，並且隨著網站頁面更多，不斷大量更新快速變化的內容耗時又耗力

# 動態網頁

使用伺服器端腳本 server-side script 和技術構建的動態網站允許根據用戶行為，即時地顯示每個頁面的不同內容

通常動態網站用於內容繁重且與用戶互動頻繁的網站

電子商務網站、社群網站、在線論壇、會員網站、串流影音平台等等是其他常見的動態網頁類型

優點：

1. 維護更容易且更快  
   使用數據庫來儲存資料，每個網頁的製作依賴伺服器端腳本 server-side script 去抓取資訊並且生成網站

2. 可擴展性  
   若從一開始就沒有計劃建立一個大型網站，動態網站的架構也可以讓我們在必要時進行擴展

3. 更好的用戶體驗  
   動態網站提供根據用戶需求量身定制的內容

4. 功能更強大  
   伺服器端腳本可用更多更強大的演算法來增加網頁功能性

缺點：

1. 需要更多資源才能建立  
   由於設定數據庫並將其連接到正確頁面所需的額外步驟，動態網站的設置和運行可能會更加複雜，這也意味著*成本更高*

2. 性能問題  
   動態網站比靜態網站有更多的處理指令，不斷從數據庫提取信息以顯示網頁內容都需要時間來處理和執行

# 後端網頁開發工具

- PHP、Laravel (PHP 套件 Framework)
- Node.js, Express.js (Server-Side JavaScript)
- Java 、Java Spring Framework
- Ruby on Rails
- Python Django、Flask Framework

過去採用 Java、Ruby 作為後端開發的原因，是因為 JavaScript 沒辦法直接拿來當成一門程式語言，獨立於瀏覽器來運作

## 認識 Node.js

Node.js 是能夠在伺服器端運行 JavaScript 的開放原始碼、跨平台執行環境

在 Node.js 出現之前，JavaScript 通常作為瀏覽器上的客戶端程式設計語言使用，以 JavaScript 寫出的程式通常能夠在使用者的瀏覽器上執行

Node.js 的出現使 JavaScript 也能用於伺服器端腳本編寫，其內部採用 V8 JavaScript 執行引擎作為核心引擎

# Module Wrapper

在 Node.js 當中，module 是指一組的程式碼，組織成簡單或複雜功能，可被用來*與外部其他程式碼連結*。可以是單個文件，或是多個文件與資料夾的集合

Module Wrapper 就是 Node.js 在背後運作的**事** (我們看不到)

執行 module 的程式碼之前，Node.js 將使用如下所示的函數包裝器來包裝它

```Java Script
(function(exports, require, module, _filename, _dirname){
   // module code actually lives in here -> module wrapper
});

(function(exports, require, module, _filename, _dirname){
   console.log("這是app1.js文件");
})(); // 後面()用來執行程式碼
// 這樣的寫法就是IIFE
```

這樣做的好處：

1. 讓使用這個 module 的文件中，所使用的 global variable**不會**被 module 內部的變數**影響**
2. 讓 module 內部所定義的 global variable 變成 function scope

```Java Script
// app1.js
require("./app2"); // module wrapper => function scope

let name = 30;  // global variable

console.log(name);
// -> 10
// -> 30
```

3. 讓 module 內部的 JS 文件可以使用某些實用的變數，例如 `module`、`exports` 可以用來輸出本身 module，而 `require` 可以用來獲得其他 module  

`require` -> 可以連結到其他 module，執行該 module 中的程式碼，因此可以在 app1.js 執行 app2.js 的程式碼

```Java Script
// app1.js
require("./app2") // -> 10

// app2.js
let name = 10;

console.log(name);
```  

4. `__filename`, `__dirname` 等等變數在開發上變得方便，因為兩者包含 module 的*絕對路徑名稱*與*資料夾路徑*  

```Java Script
console.log(__dirname); // directory name
// -> C:\Users\Lo yuan\Desktop\Udemy全端\JS_basics\node_practice

console.log(__filename);
// -> C:\Users\Lo yuan\Desktop\Udemy全端\JS_basics\node_practice\app1.js
```  

## modules  

分成三種：  
1. Node.js內建的modules，可以直接拿來使用  

[內建功能尋找](https://nodejs.org/en/docs)  

2. 我們自己製作的modules  

3. 網路上第三方製作的modules，可以透過npm (node package manager)下載來使用  

### Self-Made Modules  

Module Wrapper中提供的變數：  

- `module`變數是個**物件**，此物件包含此文件的內部訊息，包含`id`, `path`, `exports`, `parent`, `filename`等等資訊  

```Java Script
console.log(module);

/*
{
  id 點 : '.',
  path 路徑 : 'C:\\Users\\Lo yuan\\Desktop\\Udemy全端\\JS_basics\\node_practice',
  exports 屬性 : {},
  filename: 'C:\\Users\\Lo yuan\\Desktop\\Udemy全端\\JS_basics\\node_practice\\app1.js',
  loaded: false,
  children: [],
  paths: [
    'C:\\Users\\Lo yuan\\Desktop\\Udemy全端\\JS_basics\\node_practice\\node_modules',
    'C:\\Users\\Lo yuan\\Desktop\\Udemy全端\\JS_basics\\node_modules',
   'C:\\Users\\Lo yuan\\Desktop\\Udemy全端\\node_modules',
    'C:\\Users\\Lo yuan\\Desktop\\node_modules',
    'C:\\Users\\Lo yuan\\node_modules',
    'C:\\Users\\node_modules',
    'C:\\node_modules'
  ]
}
*/
```  

- `exports`是module物件的屬性，本身是個empty object {}  

- require是一個function，可以讀取一個 JavaScript 文件，執行該文件，然後`return`這個文件的 exports object  

若讀取的是一個資料夾，則讀取該資料夾內的**index.js**文件，執行該文件，然後`return`這個文件的exports object  


做 Self-Made Modules 的特點，可以把功能型相同的程式碼放一起，app2處理早晚的事情，app3處理中午的事情，最後在app1用require去取得exports物價，再用它來執行程式碼  

```Java Script
// app1
let app2 = require("./app2");
let app3 = require("./app3");

app2.morning(); // -> 早安你好
app3.lunch(); // -> 午餐時間
app2.evening(); // -> 晚安你好

//app2
function morning() {
  console.log("早安你好");
}

function evening() {
    console.log("晚安你好");
}

exports.morning = morning; 
// 把 function morning() 設定到 module.exports 的 {} 裡面叫 morning 的屬性
// exports輸出
exports.evening = evening; 

// app3
function lunch() {
    console.log("午餐時間");
}

exports.lunch = lunch;
```  

