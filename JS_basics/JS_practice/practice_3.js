// 請寫一個function , 這個function可以在reviews 中，找出關鍵詞出現的次數

// 如 countMetionsFromReviews(reviews,"CHERRY)

// 應該要return 2
// 提示：分割字串成單字：
// let words = reviews[i].split(/\W+/);

const reviews = [
  "I love APPLE, BANANA.",
  "BANANA tastes so good!",
  "CHERRY is red and sweet.",
  "APPLE is my favorite, but I also like CHERRY.",
];

// 宣告countMetionsFromReviews(reviews,keyword)
// 宣告一個記數的變數
// 切割字串
// 用for迴圈查關鍵詞
// if條件判斷關鍵詞出現的次數
function countMetionsFromReviews(reviews, keyword) {
  let count = 0;
  for (i = 0; i < reviews.length; i++) {
    let words = reviews[i].split(/\W+/);
    for (let reviewsLine = 0; reviewsLine < words.length; reviewsLine++) {
      if (words[reviewsLine] === keyword) {
        count++;
      }
    }
  }
  console.log(count);
}

countMetionsFromReviews(reviews, "CHERRY");
