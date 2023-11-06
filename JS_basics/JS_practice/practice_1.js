// 1. 初始化一個5x10的二維陣列，所有座位都為0。
// 2. 模擬5個座位被預訂，將這些座位的狀態改為1。
// 3. 印出電影院的座位圖

let seatstotal = [];
let row = 5;
let colum = 10;

for (seatrow = 0; seatrow < row; seatrow++) {
  let seatcolums = [];
  for (seatcolum = 0; seatcolum < colum; seatcolum++) {
    seatcolums.push(0);
  }
  seatstotal.push(seatcolums);
}

seatstotal[2][3] = 1;
seatstotal[3][6] = 1;

let final = "";
for (a = 0; a < seatstotal.length; a++) {
  for (b = 0; b < 10; b++) {
    final = final + seatstotal[a][b] + " ";
  }
  final = final + "\n";
}

console.log(final);
