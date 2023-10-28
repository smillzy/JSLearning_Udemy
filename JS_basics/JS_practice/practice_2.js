// 1. 請計算1A 班級的數學平均分數，並印出
// 2. 請寫1 function ，參數為科目，可以計算1a 班級的平均該科分數，並印出
// 3. 請寫一function ，參數為「班級」「科目」，可以計算該班級的平均該科分數，並印出

let classes = [
  {
    className: "1A",
    students: [
      { name: "John", scores: { math: 85, english: 78, science: 90 } },
      { name: "Jane", scores: { math: 75, english: 88, science: 82 } },
      { name: "Eva", scores: { math: 78, english: 80, science: 88 } },
      { name: "Alex", scores: { math: 90, english: 85, science: 89 } },
      { name: "Amy", scores: { math: 82, english: 87, science: 91 } },
      { name: "Robert", scores: { math: 75, english: 73, science: 78 } },
      { name: "Tina", scores: { math: 88, english: 91, science: 86 } },
    ],
  },
  {
    className: "1B",
    students: [
      { name: "Tom", scores: { math: 68, english: 74, science: 72 } },
      { name: "Lucy", scores: { math: 90, english: 92, science: 95 } },
      { name: "Sam", scores: { math: 72, english: 76, science: 85 } },
      { name: "Nancy", scores: { math: 83, english: 80, science: 89 } },
      { name: "Daniel", scores: { math: 79, english: 81, science: 74 } },
      { name: "Ella", scores: { math: 86, english: 90, science: 83 } },
      { name: "Steve", scores: { math: 84, english: 85, science: 88 } },
      { name: "Olivia", scores: { math: 91, english: 89, science: 93 } },
    ],
  },
];

// 3. 請寫一function ，參數為「班級」「科目」，可以計算該班級的平均該科分數，並印出
function averageClassScore(chooseClass, subjet) {
  let sum = 0;
  if (chooseClass == "1a") {
    for (let i = 0; i < classes[0].students.length; i++) {
      let a = classes[0].students[i].scores[subjet];
      sum = sum + a;
    }
  } else if (chooseClass == "1b") {
    for (let i = 0; i < classes[0].students.length; i++) {
      let a = classes[1].students[i].scores[subjet];
      sum = sum + a;
    }
  }
  let average = 0;
  average = sum / classes[0].students.length;
  console.log(average);
}
averageClassScore("1b", "math");
// 2. 請寫1 function ，參數為科目，可以計算1a 班級的平均該科分數，並印出
// 呼叫function三次，分別印三個不同科目
function average1a(subjet) {
  let sum = 0;
  for (let i = 0; i < classes[0].students.length; i++) {
    let a = classes[0].students[i].scores[subjet];
    sum = sum + a;
  }

  let average = 0;
  average = sum / classes[0].students.length;
  console.log(average);
}
average1a("math");

// // 1. 請計算1A 班級的數學平均分數，並印出
// // 取得1A班級的數學分數,用for迴圈加總分數
let sum = 0;
for (let i = 0; i < classes[0].students.length; i++) {
  let a = classes[0].students[i].scores.math;
  sum = sum + a;
}

// 取平均，總分/人數
let average = 0;
average = sum / classes[0].students.length;
// 打印出來
console.log(average);
