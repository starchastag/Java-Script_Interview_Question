// --------------Type Conversion ------------------


let str = '54'

console.log(typeof str, str )


// 1 . number method ---
//          its used to convert the string into the number importatn that the string is valid that convertable to number for example if i give "hello" in the str then it can not convert into number and give NaN (not a number )


let str1 = "hello"
let str1ToNumber = Number(str1);
console.log(str1ToNumber),typeof str1ToNumber;



let strToNumber = Number(str);
console.log(strToNumber,typeof strToNumber);



//Boolean method 

let age12 = 45;
console.log(age12)
let booleanOfAge = Boolean(age12)
console.log("Boolean value of age is ",booleanOfAge)