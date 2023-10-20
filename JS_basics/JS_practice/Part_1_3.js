// 練習題第一部分
// 第三題
// 編寫一個名為isUpperCase的函式，唯一的參數是一個String，其功能為來檢查參數中String的第一個字母是否為大寫

function isUpperCase(str) {
  if (str.length == 0) {
    return false;
  }

  if (str[0] == str[0].toUpperCase()) {
    return true;
  } else {
    return false;
  }

  // 寫下面這個效果更好， " == " 返回的值是布林值
  // return str[0] == str[0].toUpperCase();
}

console.log(isUpperCase("ABCD"));
console.log(isUpperCase(""));
console.log(isUpperCase("aBCD"));
