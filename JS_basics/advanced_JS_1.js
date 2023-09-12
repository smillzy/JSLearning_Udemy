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
