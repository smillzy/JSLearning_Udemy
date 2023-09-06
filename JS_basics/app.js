// let user_name = window.prompt("請輸入你的名字");
// window.alert("歡迎來到網站" + user_name);
// console.log("Hello World");

/*
let x; //declare a variable
x = 10; //variable assignment

console.log(x); //看x值為多少

let y = 10;
console.log(y);

z = 100;
console.log(z);
*/

/*
let x; //宣告x這個變數沒有initializer
const y = 50; 
*/

/*
// + - * /
console.log(100 + 50);
console.log(100 - 50);
console.log(100 * 50);
console.log(100 / 50);
*/

/*
//宣告再做加減
let x = 100;
let y = 50;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
*/

/*
//餘數remainder operator
let x = 100;
let y = 50;
//mod
console.log(x % y);
*/

/*
//也可以這樣做
let x = 100;
let y = 50;

let result = x % y;
console.log(result);
*/

/*
//指數exponentiation operator
let x = 10;
let y = 3;

console.log(x ** y); //x^y
*/

/*
// x=x+1 = x++ = x+=1
let x = 10;
x++; //x=x+1
console.log(x);
*/

/*
// x=x-1 = x-- = x-=1
let x = 10;
x--; //x=x-1
console.log(x);
*/

/*
// x=x+1 = x++ = x+=1
// x=x-1 = x-- = x-=1
// x=x*1 =  x*=1
// x=x/1 =  x/=1
let x = 100;
x /= 2; // x = x / 2
console.log(x);
*/

/*
//使用雙引號
let name = "Phoebe";
console.log(name);

//使用單引號+雙引號
let sentence = "he's a good guy.";
console.log(sentence);
*/

/*
let first_name = "Phoebe";
let last_name = "Lee";

// + is not addition, instead, + is string concatenation
console.log(first_name + " " + last_name);
*/

/*
let first_name = "Phoebe";
let last_name = "Lee";

//拿去做減法
console.log(first_name - last_name);
*/

/*
let x = 10; //x data type is number
let y = "10"; //y data type is string

console.log(x + x); // ->20
console.log(y + y); // ->1010
*/

/*
let x = 10; //x data type is number
let y = "10"; //y data type is string

console.log(x + y);
*/

/*
let n1 = 20;
let n2 = 30;
let name = "Phoebe";
let n3 = 10;
let n4 = 15;

console.log(n1 + n2 + name); //程式碼從上到下讀取，從左到右讀取

console.log(n1 + n2 + name + n3 + n4); //先變成50Phoebe(string)，加上n3後->50Phoebe10，再加上n4後->50Phoebe1015

console.log("Phoebe\nLee"); //\n換行
*/

/*
let age = 27;
console.log(typeof age);
console.log(age.toString());
console.log(age.toString() + age);
console.log(typeof age.toString());
*/

/*
const pi = 3.1415926;
console.log(pi.toFixed(2));
console.log(typeof pi.toFixed(2));
*/

/*
let x = 10; //x is a number (x ia an object)

console.log(x.toString); 
//如果忘記加() -> ƒ toString()，告訴你對x來說，toString是一個method or function
*/

/*
///Properties-length
let str = "Phoebe";
console.log(str.length);

let str = ""; //empty string -> 0
console.log(str.length);
*/

/*
let str = "Phoebe";
console.log(str[0]); -> P

//str長度為6，str最後一個文字的index會是5
//對於任一個str，若str長度為x，則最後一個文字的index會是x - 1

//若要取e，以下兩種方法
console.log(str[5]);
console.log(str[str.length - 1]);

//沒有寫正確的值，會得到undefined，-1也是undefined
console.log(str[6]); 
*/

/*
let str = "Phoebe"; // o index -> 2
console.log(str.slice(2));

//indexEnd is exclusive
console.log(str.slice(0, 4)); // -> Phoe
*/

/*
let str = "Phoebe";
console.log(str.indexOf("b")); // -> 4
console.log(str.indexOf("ebe")); // -> 3
console.log(str.indexOf("k")); // -> -1
*/

/*
let str = "Phoebe";
console.log(str.toLowerCase());
console.log(str.toUpperCase());

//reassignment
str = str.toUpperCase();
console.log(str);
*/

/*
//split
let sentence = "Today is a good day";
// "Today", "is", "a", "good", "day" -> 將一個句子切成多塊string

let result = sentence.split(" ");
console.log(result); // -> 'Today', 'is', 'a', 'good', 'day'

let result2 = sentence.split("o");
console.log(result2); // -> 'T', 'day is a g', '', 'd day'
*/

/*
let sentence = "Today is a good day";
console.log(sentence.startsWith("Today")); // -> true
console.log(sentence.startsWith("today")); // -> false
*/

/*
let sentence = "Today is a good day";
console.log(sentence.includes("good")); // -> true
console.log(sentence.includes("Phoebe")); // -> false
*/

/*
let sentence = "Today is a good day";

console.log(sentence.charCodeAt(0));
// 0 -> T， T 這個字在UTF-16字元編碼裡面，他所相對應的數字編碼是多少 -> 84
*/
