// =============1.1 Guess the output and check its typeof

let language = 'java javaScript python cSharp';
let result = language.lastIndexOf('S');
console.log(result);
console.log(typeof (result));
/*----------------------------------

language is a variable that store given value which is a string data type that hold the some memory with indexing
and S is 24 stored in 24 if i give space then spacce also count within indexing. 


--*/
// =================deifference between define and undefine ===>
let a;
console.log(typeof (a))// its a undefine data type

let b;
b=23;
console.log(typeof (b),b);// its a define data type

// ==============Guess the output and why with answer
let variable = 'hello programmers';

let resulte = Number(variable);

console.log(resulte);
/*  here varible store a string type of data but againe i convert it into the number and that why its show the nan value */

// ====================Guess output 3==============
let num1 = 32;

let num2 = '32';

let result1 = num1 !== num2;

let result2 = num1 != num2;

console.log(result1, result2);
/*
while comparing num2 and num1 value then we give same value but num1 is integers and num2 is a string and in the java script comparision operator compare only value not with data type that why its give true in the result1 and false in the result 2                   
    */

// ==================================================>>

let str = 'Hello Programmers';

let resultw = str.includes('r');

console.log(resultw);

/*          
 this statement give True output beacuse hello programmers is a string data type and in the next resultw we check r is present or not in the str variable by the help of .includes method 
 we see that r is present in the str variable so the output is True 

*/

// =============================================>>

let nums1 = 2;

let nums2 = 5;

let resultt = nums1 ** nums2 * 2;

console.log(resultt);

/* 
 nums1 and nums2 is a varible that hold 2 and 5 respectvely and result variable is show that nums1 ** nums2 thats mean the value of nums1 is self multiple number of time of nums2 and resultant is multiply 2 so the output is 2 the power 5= 32 and 32*2=63
 */
// ========================================================>>

 let num11 = [1, 2, 4, 5];

let num12 = [6, 5, 8, 0];

let resultd = num11.concat(num12);

console.log(resultd);

/*

the element of num11 and num12 combined togather and represted in one 2x2 matrix beacuse while using .concat() it put all data in own variable 
*/
// =========================================================>>
let a1 = 5;

let b1 = 7;

let c = 8;

let result12 = a1 < b1 > c;

console.log(result12);


// its give false beacuse a1 is less then b and b is not greter then c 