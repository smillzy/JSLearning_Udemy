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

1. Node.js 內建的 modules，可以直接拿來使用

[內建功能尋找](https://nodejs.org/en/docs)

2. 我們自己製作的 modules

3. 網路上第三方製作的 modules，可以透過 npm (node package manager)下載來使用

### 內建的 modules

`http module`可以創建網頁伺服器，創建好網頁就可以讓別人發出 http request，跟得到一個 http response

`fs.writeFile`

```Java Script
// fs 文件系統 ile system，用來寫文件
const fs = require("fs");

// fs.writeFile(文件名稱, 要寫的內容, error function)
fs.writeFile("myFile.text", "今天天氣不錯", (e) => {
  if (e) throw e;

  console.log("文件已經撰寫完畢");
});

// modules.js -> 文件已經撰寫完畢
// 同時會產生出一個myFile.text，裡面寫 今天天氣不錯
```

`readFile`

```Java Script
// fs.readFile(要讀的文件名稱, encoging, call back function)
fs.readFile("myFile.text", "utf8", (e, data) => {
  if (e) throw e;

  console.log(data);
});
// modules.js -> 今天天氣不錯
```

錯誤的情況

```Java Script
fs.readFile("hgljbjk.text", "utf8", (e, data) => {
  if (e) {
    console.log(e);
  }

  console.log(data);
});
// -> Error: ENOENT: no such file or directory
```

### Self-Made Modules

Module Wrapper 中提供的變數：

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

- `exports`是 module 物件的屬性，本身是個 empty object {}

- require 是一個 function，可以讀取一個 JavaScript 文件，執行該文件，然後`return`這個文件的 exports object

若讀取的是一個資料夾，則讀取該資料夾內的**index.js**文件，執行該文件，然後`return`這個文件的 exports object

做 Self-Made Modules 的特點，可以把功能型相同的程式碼放一起，app2 處理早晚的事情，app3 處理中午的事情，最後在 app1 用 require 去取得 exports 物價，再用它來執行程式碼

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

# 網路架構基本 名詞解釋

## IP 位址

IP Address，全稱 Internet Protocol Address，又譯為網際網路協定位址，是網際協定中用於標識傳送或接收資料裝置的一串數字。

相當於每個在網路上的**電腦的地址**

常見的 IP 位址分為*IPv4*與*IPv6*兩大類，IP 位址由一串數字組成

IPv4 為 32 位元長，通常書寫時以四組十進位數字組成，並以點分隔，如：172.16.254.1

IPv4 每 8 個 digit 都會被轉換為 0 到 255 之間的整數，因此，IPv4 通常是 168.1.7.0 而不是 10101000.00000001.00000111.00000000，用前者更容易讓人記憶

根據 IPv4 地址的格式，全世界有多少個不同的設備可以同時上網？

32bits 可以製作出 2^32 個不同的 IP 地址， 2^32=4294967296, ，約 43 億

但是，這個世界上大約有 72 億人，且每個人可能擁有超過 1 個與網路連接的設備，所以用 IPv4 地址的格式可能*會有一天不夠用*

因此，IPv6 於 1990 年代引入，IPv6 使用**128 位元**，將確保地球上的每一個人、裝置、每一塊岩石和沙子都能夠擁有一個 IPv6 地址

IPv6 通常書寫時以八組十六進位數字組成，以冒號分割，如：2001:db8:0:1234:0:567:8:1

## DNS

Domain Name System，是網際網路的一項服務

它作為將域名 Domain Name 和 IP 位址*相互對映*的一個分散式資料庫，能夠使人更方便地存取網際網路

DNS 旨在讓人們**記住域名**，而不是無意義的數字。 例如，記住www.youtube.com比記住168.112.0.12更容易

DNS 系統運作方式：

如果要去 youtube.com(Domain Name)，DNS 會自動把它轉成 IP Address，再把 HTTP Request 寄出

## Port

伺服器中的 port 是網路通訊連接時，邏輯上的端點 endpoint，用於在伺服器和客戶端之間**交換信息**，每個 port 被分配一個唯一的數字來單獨識別它們

一個伺服器可以同時提供多種服務，每個服務有相對應的 port，客戶端可以根據需求，透過連結到伺服器上不同的 port 來與伺服器互動

一些最常用的端口及其相關的網絡協議是：

| Port 號碼 |                                                             用途                                                              |
| :-------: | :---------------------------------------------------------------------------------------------------------------------------: |
|  20, 21   |           文件傳輸協議 File Transfer Protocol (FTP). FTP is for _transferring_ files between a client and a server.           |
|    22     |       網路資訊交換、連接協議 Secure Shell (SSH). SSH is one of many protocols that create _secure network connections_.       |
|    25     |                          郵件傳輸協議 Simple Mail Transfer Protocol (SMTP). SMTP is used for email.                           |
|    80     |                                       Web 傳輸協議 Hypertext Transfer Protocol (HTTP).                                        |
|    443    |                                 HTTP Secure (HTTPS). All HTTPS web traffic goes to port 443.                                  |
|   3389    | 遠端控制 Remote Desktop Protocol (RDP). RDP enables users to remotely connect to their desktop computers from another device. |

例如：Google 伺服器是https://www.google.com，我們希望發出HTTPs Request，則可以對著https://www.google.com:443發出請求，即可連線到Google伺服器上處理HTTPs請求的port

因為沒有必要顯示，所以網址後面的:443 通常在網頁瀏覽器上是看不到的

另一方面，Google 伺服器有著 24 小時不停止運作的腳本語言，在處理任何來自 port 443 的請求

腳本的 Pseudocode 如下：

```Java Script
app.listen(20, () => { return a file to client}) //處理FTP請求
app.listen(25, () => { return an email to client}) //處理SMTP請求
app.listen(443, () => { return a webpage to client}) // 處理HTTPs請求
```

## localhost:3000

在電腦網絡中，localhost 意為「本地主機」，是給迴路網絡接口 loopback 的一個**標準主機名**，相對應的 IP 位址為 127.0.0.1（IPv4）

在 DNS 中，localhost 這個 domain name 會被換成 127.0.0.1

我們可以在自己的電腦上面架設並且運行伺服器，當我們要使用同一台電腦連結到在自己的電腦上面伺服器，可以透過寄送請求到 localhost 到自己的電腦上，這就是迴路網絡接口 loopback

通常我們在本機上的網頁伺服器，都是使用 port 3000 或是 8080(也可以設定任何 1000 到 9999 內的數字，但不可以設定到常用的 port 號碼)

# HTTP Request and Response Header

HTTP Request 以及 Response 的基本規定格式如下：

- Request-Line(特別說要的東西是甚麼) for HTTP Request, Status-Line(可不可以有請求的東西) for HTTP Response
- Header 存取其他內容，例如:編碼 encoding、length
- An _empty line_ indicating the end of the header fields 如果有空行，代表已結束
- Optionally a message section 可以選擇使用與否的訊息區

HTTP 協議中定義 client 跟 server 要請求內容時，有 4 種請求方式：

1. GET Request - 請求(要)內容
2. POST Request - 給 server 資料
3. PUT Request - server 更新資料
4. DELETE Request - server 刪除資料

一個基礎的 Get Request 會是：

```HTML
<!--- GET -> HTTP verb(可以是GET, POST, PUT, DELETE) --->
<!--- HTTP/1.1 -> 使用 HTTP 1.1 的協議 -->
GET /index.html HTTP/1.1

<!--- header 的部分，HOST -> 要找的server是誰(URL) -->
HOST: Phoebe.edu

<!--- HTTP內容到這邊停止 -->
<BLANK LINE>
```

一個基礎的 Response 會是：

```HTML
<!--- 如果 server 同意存取東西 status code -> 200 OK --->
HTTP/1.1 200 OK

<!--- header 的部分，Content-Length -> 空格之後，網頁長度有多長 --->
Content-Length: 1555
Content-Type: text/html; charset=ISO-8859-1

<!DOCTYPE html>
<html>
<body>
...
```

如果網頁交出表格資料，且使用`GET request`的話，會是：

```HTML
<!--- 資料會放在網址後面 --->
GET /index.html?name=Phoebe&age=23 HTTP/1.1
HOST: Phoebe.edu
<BLANK LINE>
```

`Post Request`內部有表格資料的話，會是：

```HTML
POST /index.html HTTP/1.1

<!--- header，資料會接在header空格後 --->
HOST: Phoebe.edu
<!--- Content-Type 指下面的訊息是會被隱藏起來 --->
Content-Type: application/x-www-form-urlencode
Content-Length: 33

field1=value&field2=value2
```

帶有`cookie`設定的 request：

```HTML
GET /index.html HTTP/1.1

<!--- header，設定cookie --->
HOST: Phoebe.edu
SET-COOKIES: session_id = adsfklasdklf
<BLANK LINE>
```

帶有`cookie`設定的 response：

```HTML
HTTP/1.1 200 OK

<!--- header，設定cookie --->
Content-Length: 200
Content-Type: text/html
SET-COOKIES: session_id = adsfklasdklfjaslke;fja;sd

<!DOCTYPE html>
```
