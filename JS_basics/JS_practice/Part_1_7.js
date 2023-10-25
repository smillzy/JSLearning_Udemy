// 練習題第一部分
// 第七題
// 編寫一個名為findSmallerTotal的函式，其參數為一個整數的array以及另一個整數
// 回傳值為array中小於第二個參數的所有元素的總和

function findSmallerTotal(arr, int) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < int) {
        total += arr[i];
    }
  }
  console.log(total);
  return total;
}

findSmallerTotal([1, 2, 3], 3); // returns 3
findSmallerTotal([1, 2, 3], 1); // returns 0
findSmallerTotal([3, 2, 5, 8, 7], 999); // returns 25
findSmallerTotal([3, 2, 5, 8, 7], 0); // returns 0
