// 編寫一個名為stars2的函式，功能為按以下模式打印出星星層：

// stars2(1);
// // *

// stars2(3);
// // *
// // **
// // ***
// // **
// // *

// 宣告function stars
// 宣告一個空的變數
// for迴圈先跑遞增
// 添加if條件跑遞減 n-1層
// 打印出

function stars2(number) {
  let starsEmpty = "";
  for (let times = 0; times < number; times++) {
    starsEmpty = starsEmpty + "*";
    console.log(starsEmpty);
  }

  for (
    let timesSubtraction = number - 1;
    timesSubtraction > 0;
    timesSubtraction--
  ) {
    let starsEmptySubtraction = "";
    for (let i = 0; i < timesSubtraction; i++) {
      starsEmptySubtraction = starsEmptySubtraction + "*"; //->
    }
    console.log(starsEmptySubtraction);
  }
}

stars2(4);
