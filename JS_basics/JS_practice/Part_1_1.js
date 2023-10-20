// 練習題第一部分
// 第一題
// 編寫一個名為“printEvery3()”的函式，它打印出等差數列 1, 4, 7, …, 88

// for做法
function printEvery3() {
  for (let i = 1; i <= 88; i += 3) {
    if (i == 88) {
      return;
    }
    console.log(i);
  }
}

printEvery3();

// while做法
function printEvery3() {
  let i = 1;
  while (i <= 88) {
    console.log(i);
    i += 3;
  }
}

printEvery3();
