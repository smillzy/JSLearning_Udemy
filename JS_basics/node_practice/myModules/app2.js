/*
let name = 10;

console.log(name);
*/

function morning() {
  console.log("早安你好");
}

function evening() {
    console.log("晚安你好");
}

exports.morning = morning; 
// 把 function morning() 設定到 module.exports 的 {} 裡面叫 morning 的屬性
// exports就是輸出要如何拿來用
exports.evening = evening; 