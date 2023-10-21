// 練習題第一部分
// 第四題
// 編寫一個名為isAllUpperCase的函式，唯一的參數是一個String，其功能為來檢查參數中String的 所有字母 是否為大寫

function isAllUpperCase(str) {
  if (str.length == 0) {
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i].toLowerCase()) {
      return false;
    }
  }
  return true;

  // for可以改成return str == str.toUpperCase();
}

console.log(isAllUpperCase("ABCD"));
console.log(isAllUpperCase(""));
console.log(isAllUpperCase("AbCD"));
