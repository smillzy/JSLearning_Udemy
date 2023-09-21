// 拿到HTTP module
const http = require("http");
const fs = require("fs");

// 用createServer()去創建網頁伺服器
// ()裡面要給一個callback function，裡面要有兩個參數parameters
// 創建request object (req), response object
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  if (req.url == "/") {
    res.write("歡迎來到我的網頁");
    res.end();
  } else if (req.url == "/anotherPage") {
    res.write("這是另一個頁面");
    res.end();
  } else if (req.url == "/myFile") {
    fs.readFile("index_1.html", (e, data) => {
      if (e) {
        res.write("存取HTML文件錯誤");
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });
  } else {
    res.write("不存在頁面");
    res.end();
  }
  // res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  // res.write("歡迎來到我的網頁");
});

server.listen(3000, () => {
  console.log("伺服器正在port3000上運行");
}); // 只要啟動伺服器，就會去聆聽來自世界各地的請求(24hr監聽)
