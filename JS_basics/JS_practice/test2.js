// 宣告一個數字
// 用兩個for迴圈，一個負責遞增，一個負責遞減
// for迴圈宣告變數，變數+1，遞增
// 1
// 2
// 3
// for迴圈宣告變數，變數-1，遞減
// 2
// 1

let number = 4;
let s = 1;

// 負責遞增
for (let i = 0; i < number; i++) {
  printStar(i + 1);

  //s=s+1;
}

// 負責遞減
for (let i = number - 1; 0 < i; i--) {
  printStar(i);
}

function printStar(number) {
  let starString = "";
  for (let i = 0; i < number; i++) {
    starString = starString + "*";
  }
  console.log(starString);
}
