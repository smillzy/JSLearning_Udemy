// require 從 npm 中下載下來的 package。express 本身是個可以執行的 function
const express = require("express");

// 執行function express，他會 return 一個object。把 object 稱為 app
const app = express();
const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app->我們的伺服器。要放兩個參數(port, callback)
app.listen(3000, () => {
  console.log("伺服器正在 port 3000 上運行");
});
