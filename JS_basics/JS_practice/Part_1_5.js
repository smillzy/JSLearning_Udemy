// 練習題第一部分
// 第五題
// 編寫一個名為position的函式，唯一的參數是一個String，其功能為找到參數String當中的第一個大寫字母，並且回傳大寫字母的值以及其index位置

function position(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i].toUpperCase()) {
      return str[i] + " " + i;
    }
  }

  return -1;
}

console.log(position("abcd"));
console.log(position("AbcD"));
console.log(position("abCD"));
