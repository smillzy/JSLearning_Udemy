// 練習題第一部分
// 第六題
// 編寫一個名為findSmallCount的函式，其參數為一個整數的array以及另一個整數
// 功能是回傳一個整數，來表示array中有多少元素小於第二個參數

function findSmallCount(arr, int) {
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < int) {
      counter++;
    }
  }
  console.log(counter);
  return counter;
}

findSmallCount([1, 2, 3], 2); // returns 1
findSmallCount([1, 2, 3, 4, 5], 0); // returns 0
