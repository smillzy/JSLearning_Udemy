const array1 = [];
const array2 = [];
const row = 5;
const colum = 10;

for (let i = 100; i < 100 + row; i++) {
  const arraynew = []
  for (let j = 8; j < 18; j++) {
    arraynew.push(0);
  }
  array2.push(arraynew);
}

array2[0][1]=1
array2[4][5]=1
let c="" 
for( let a = 0; a<5;a++){
    for(let b = 0; b<10 ;b++){
        c = c + array2[a][b] + " "
    }
    c = c + "\n"
}
console.log(c)

// function combineString(arrInternal){
//     let stringGoal="";
//     for(let b = 0; b<arrInternal.length ;b++){
//         stringGoal = stringGoal + arrInternal[b] + " ";
//     }
//     stringGoal=stringGoal+"\n";
//     console.log(stringGoal)
//     return stringGoal
// }
// let stringSeat="";

// for(let i=0;i<array2.length;i++){
    
//     stringSeat=stringSeat+combineString(array2[i],stringSeat)
// }

 

// console.log(stringSeat.length)