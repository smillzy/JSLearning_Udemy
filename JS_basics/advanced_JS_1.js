/*
console.log(typeof Infinity);
*/

/*
let num1 = [1, 2, 3];
let num2 = [4, 5, 6];
//將num1, num2串成array[1, 2, 3, 4, 5, 6]

//方法1
let result = num1.concat(num2);
console.log(result);

//方法2(較常見)
console.log([...num1, ...num2]);
*/

// let result = num1 + num2;
// console.log(typeof result);  // -> string

/*
const parts = ["肩膀", "膝蓋"];
const otherParts = ["頭", ...parts, "身體", "腳"];

console.log(otherParts);
*/

/*
const arr = [1, 2, 3];
const arr2 = [...arr];  // -> ...arr複製出的arr並不是copy by reference

arr2.push(4);

console.log(arr);
console.log(arr2);
*/

/*
let arr = [1, 2, 3];
let arr2 = [4, 5, 6];

console.log([...arr, ...arr2]);
*/

/*
function sum(a, b, c, d, e) {
  return a + b + c + d + e;
}

let arr = [1, 2, 3];
console.log(sum(10, ...arr, 5));
*/

/*
function sum(...theArgs) {
  console.log(theArgs);
}
sum(1, 2, 3, 4, 5, 6);
*/

/*
let myName = new String("Phoebe");

console.log(typeof myName);  // -> object
*/

const languages = [
  { name: "Python", rating: 9.5, popularity: 9.7, trending: "super hot" },
  { name: "Java", rating: 9.4, popularity: 8.5, trending: "hot" },
  { name: "C++", rating: 9.2, popularity: 7.7, trending: "hot" },
  { name: "PHP", rating: 9.0, popularity: 5.7, trending: "decreasing" },
  { name: "JS", rating: 8.5, popularity: 8.7, trending: "hot" },
];

// let result = languages.map((lang) => {
//   return lang.name.toUpperCase();
// });
// console.log(result);  // -> ['PYTHON', 'JAVA', 'C++', 'PHP', 'JS']

// let result = languages.find((lang) => {
//   return lang.popularity > 9.5;
// });
// console.log(result); // -> {name: 'Python', rating: 9.5, popularity: 9.7, trending: 'super hot'}

// let result2 = languages.find((lang) => {
//   return lang.popularity > 9.8;
// });
// console.log(result2); // -> undefined

// let result = languages.filter((lang) => {
//   return lang.rating >= 9.2;
// });
// console.log(result);
//-> [
//     {name: 'Python', rating: 9.5, popularity: 9.7, trending: 'super hot'},
//     {name: 'Java', rating: 9.4, popularity: 8.5, trending: 'hot'},
//     {name: 'C++', rating: 9.2, popularity: 7.7, trending: 'hot'}
//   ]

// let result = languages.some((lang) => lang.popularity <= 6);
// console.log(result);  // -> true

// let result = languages.every((lang) => lang.popularity > 5);
// console.log(result);  // -> true

/*
let languages = ["Java", "C++", "Python", "JavaScript"];


let result = languages.map(function (lang) {
  return lang.toUpperCase();
});
console.log(result);  // -> ['JAVA', 'C++', 'PYTHON', 'JAVASCRIPT']
//可以改成error function

let result = languages.map((lang) => lang.toUpperCase());
console.log(result);  // -> ['JAVA', 'C++', 'PYTHON', 'JAVASCRIPT']
*/

// let arr = [1, 2, 3, 4, 5, 6, 7];

// // let newArr = arr.map((i) => i ** 2);
// // console.log(newArr);  // -> [1, 4, 9, 16, 25, 36, 49]

// let newArr = arr.forEach((i) => {
//   console.log(i ** 2);  // -> [1, 4, 9, 16, 25, 36, 49]
// });

// console.log(newArr);  // -> undefined

/*
let myArr = [1, 5, 3, 2, 4, 7, 8, 0];
let mySortedArr = [...myArr];
mySortedArr.sort();
console.log(myArr); // -> [1, 5, 3, 2, 4, 7, 8, 0]
console.log(mySortedArr); // -> [0, 1, 2, 3, 4, 5, 7, 8]
console.log(mySortedArr.reverse());  // -> [8, 7, 5, 4, 3, 2, 1, 0]
*/

/*
let num = [8, 4, 3, 5, 6, 1, 0];
num.sort((a, b) => {
  return b - a;
});

console.log(num); // ->  [8, 6, 5, 4, 3, 1, 0]，由大到小
*/

/*
let fruits = ["Watermelon", "Apple", "Banana"];
fruits.sort((a, b) => {
  if (a.length > b.length) {
    return -1;
  } else {
    return 1;
  }
});
console.log(fruits); // ->  ['Watermelon', 'Banana', 'Apple']
*/

// let numbers = [10, 20, 30];

// //方法1
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);  // -> 10, 20, 30
// }

// //方法2
// numbers.forEach((n) => {
//   console.log(n);  // -> 10, 20, 30
// });

// //方法3
// for (n of numbers) {
//   console.log(n);  // -> 10, 20, 30
// }

/*
let myString = "Phoebe";
for (let i of myString) {
  console.log(i);
}
*/

/*
let Phoebe = {
  name: "Phoebe Lee",
  age: 23,
};

// for in Loop 每次循環會循環他的可枚舉屬性(enumerable properties) -> 他的key(name, age)
// key
for (let property in Phoebe) {
  console.log(property); // -> name, age
}

// value
for (let property in Phoebe) {
  console.log(Phoebe[property]); // -> Phoebe, 23
}
*/

// let num = [100, 44, 22];

// for (let i in num) {
//   console.log(i); // -> 0, 1, 2
// }

// for (let i in num) {
//   console.log(num[i]); // -> 100, 44, 22
// }
