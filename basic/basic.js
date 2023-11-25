console.log("Hello Saprta");
// prompt("Sparta" );
// document.write("Enter your Age");
// confirm("Completer the task")


// variable in js
// var name = "Bhagirathi";
// var Name = "SPartata"
// var _test = "Testing"


// let pint = 23;
// let st = "Sparta";


// const  value = 56;
// const nt = "tiriger"

// console.log(Name , pint );

// Data-type
// 7 data type

// Numbers 1,3,4,53,345 etc

// String "i am string","34","i am also a string"

// Null  Intentionally absence of value

// let score = null;
// score = 32;
// console.log(score);

// Undefine Variable declared bot no initialize

// let ste;
// st = 12;
// console.log(ste);


//object Complex data structure

//Symbole looks like object


// ---------String---------

// let firstname = "Wow";
// let lastname = "You are Saprta";
// console.log(firstname,lastname);

// String Concatination
// method 1 +symbole used
// let fulname = "rojers"+firstname+lastname;
// console.log(fulname);
// conctionation added string without space 

// for space between string we use +""+
// let fullname = "rojers"+" "+firstname+lastname;
// console.log(fullname);


// ----2nd method---
// let fullname = `I want to become ${firstname} ${lastname}`
// console.log(fullname)

// -----Getting string charcter




// -----String Method-----
// let hobbies = 'coding reading running';

// trim
// let result = hobbies.trim();

// console.log(result);




// indexof--  for find the charter in string

// console.log(result.indexOf("coding"));

// console.log(hobbies.indexOf("running "));

// .lastindexof-- find last charcter 

// console.log(result.lastIndexOf("running"));

// include method --- is charcter in the string or not

// console.log(result.includes("reading"));




// Slice method -- for get charcter only given index  .slice(first_index, last_index)

// let tname = " hello Programmer"
// console.log(tname.slice(0,5));  exculding last one 0-7

//  does not mutate originaly array
 

//  sting split method

// let favriotC = " black red green";
// let arrcolors = favriotC.split(' ');
// console.log(arrcolors);

// -------javascript string are imutable  

// let str = "hello";
// str[0] = "p";
// str[1] = "l";
// // console.log(str)   --- string will not allow change element so that is immutable

// st = str + "Programmers"
// console.log(str);

// const a = new String("Hello world"); 
// // a === "hello world is false"
// const b = String('Hellow World');
// b ==="hello world is true"
// a instanceof String ; //is true
// b instanceof String; // is false
// typeof a; //object
// typeof b; // string



// const sym = Symbol('example');
// String(sym);
// ===============================Array======================

// // three method in Array
// acessior
// iteration
// mutator
// <<===============for each method in array
const books =[
    "the lord of the rigs",
    "here we got ot",
    "digital forencis",
]
const flipTitles = function (elem,index){
    console.log(elem.split(' ').reverse().join(' '));
}
books.forEach(flipTitles);




// a funtion called gruo array elements that takes an array an interger n as arguments and gruops the element of the array in n subarray

function grupArrayElements(inputArr,n){
    // check if n is vaild number
    const result = []
    if(n<=0 || (Number.isInteger(n))){
        return result;
    }
   
// length of the subarray
    const len = Math.floor(inputArr.length / n);
    // initialise th Array
    let stat


}





//----------------mathmatical operator in string -----------------------------------------

// let score = 50;
//  let result = score *2 +(4+3)-3/2%4;
 //--------here we should to know that operator associativity and presidence 

//  1 () Brackets
//  2. ** power opertator 
//  3. */% from left to right
//  4. + - from left to right
// console.log(result)


// // concatination of numbers 
// let resline = ' here is all about js ' + result;
// console.log(resline); 



// //--------------------------loose equlity in 

// let age = 56;
// console.log(age=== "56");//focus only value but not type


// //-------------strict equlity operator ---------
// console.log(age==='56');// focus only both value and its types
// console.log(  )


//--------------Type conversion ---------------

// let stringType = '45';
// console.log(stringType,typeof stringType);


// //number method 

// let numberType = Number(stringType);
// console.log(numberType,typeof numberType);





// Looping code 

// const btn = document.querySelector("button");
// const canvas = document.querySelector('canvas');
// const ctx = canvas.getContext("2d");
// document.addEventListener("DOMContentLoaded",() =>{
//     canvas.width = document.documentElement.clientWidth;
//     canvas.height = documentElement.clientHeight;
// });

// function random(number){
//     return Math.floor(Math.random()*number);
// }

// const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

// for (const cat of cats) {
//   console.log(cat);
// }

// for loop in js   for(1st is initilization; 2nd is condtional; 3rd is final statement)


// for of and for in
//-----------------for of -------------
// const user = [
//   {
//     id:1,
//     name:'StaticRange',
//     age:25,
//     profession:'Webmaker',
//   },
//   {
//     id:2,
//     name:'rojers',
//     age:42,
//     profession:'machenic',
//   },
// ];






// const word='ROJERS';
// for(const w of word){
//   console.log(w)
// } 
// console.log("Find out what is means to me .........")

// //here we not define any method in the for loop function
// const AverageageofNums = function () {
//   let sum = 0;
//   for (const argument of arguments){
//     sum += arguments;
//   }
//   return sum / arguments.length;
// };
// console.log(AverageageofNums(1,2,3,4,5,6,7,8,9));
// console.log(AverageageofNums(11,12,2,3,55,));




// for -in loop



// const colors =['red','green','yellow'];
// for (const index in colors){
//   console.log(index);
// }

//-------while and do-while loop-----


//while ---

// let m = 1,oddnums = [];
// while  (m<40){
//   oddnums.push(m);
//   m+=2;
// }
// console.log(oddnums.toString());



//do while ------

// let n = 1;
// oddnumsAgain = [];

// do {
//   oddnumsAgain.push(n);
//   if (n=== 15) break;
//   n +=2;
// }while (n<15)
  
// console.log(oddnums.toString());


//--------Recusive funstion -----------

//example with creating function --

// const loopMe = function(maxcount , counter = 0){
//   if (counter < maxcount){
//     console.log('This should run 10 times (${ounter})');
//     return loopMe(maxcount,counter + 1);
//   }
// };
// loopMe(10);



// loop in javascritp
//-------------1.for loop
//-------------2.while loop 
//-------------3.do while loop
//-------------4.break



// // conditional statement
// 1.if else
// 2.switch 
// // 3.boolean or truthly/falsy statement
// 4.Ternary operator (? :)  shorthand for if else condtion



// ----------function 

// it is simply a peace of code which we can use in our program many TimeRanges.


// it is just like a variable holding some piece of code 

// // ------------------Declaration
// function nameofFunction(){
//     console.log("You are running code present inside the function")
// }

// // function call
// nameofFunction()

// // declaration
//     function nameofFunction(){
//         console.log("We are running code present inside the function")
//     }
// //    calling function -->
//     nameofFunction()

//  // <!--------------- function expression ----------------->
//     let fun = function(){ // also called anonyms function
//                   console.log("This is an example of function expression")
//     }

// <!-- calling function expression -->
    // fun()


// real example

// let invitation = function(){
//     console.log("You are invited on our evet ")
// }
// invitation()

// // another example with parameter and arguments
// let invitations = function(name){// here name is parameter 
//     console.log(`Welcome ! hello ${name} you are invited in our event `)
// }
// invitations("sparta")// here sparta is argument
// invitations("rohit")
 

// // how to return value from function
// let agecalculation = function(birthyear,currentyear){
//     let age = currentyear-birthyear;
//     console.log(`your current age is : ${age}`)
//     return age;// after getting return value from any function then after that we can not execute any another statement after this  this is last statement of any function 
// }
// let functionResult = agecalculation(2002,2024)
// console.log(`Your age is : ${functionResult}`);



// <------ Arrow function ------------------->

// special form of function expression
// it allows us to write function more fast beacuse
//  no need to use function keyword 
//  no need to use paranthesis() in case of sngle parameter 
//  no need to use curely if single line code in function 
//  no need to use return statement if single line code in function 


// <--------------------------------function expression 
// let invitation = function (name){
//     console.log(`welcome ${name} to this event .`);
// }
// invitation("coders army ")   // this is normal function 

// <--arrow function 
// let invetation = name => ` Welcome ${name} to this event`
// console.log(invetation("conders army"))   // withour braces 

// let invetation = name => {
//     return ` Welcome ${name} to this event`
// }
// console.log(invetation("conders army")) 


// // <--------Passing function as an Arguments (Higher order function example)

// let upperCase = function(str){
//     return str.toUpperCase();
// }
// let lowerCase = function(str){
//     return str.toLowerCase();
// }
// let transformer = function(str,fun){
//     return fun(str)
// }
// console.log(transformer("hello",upperCase));
// console.log(transformer("HELLO",lowerCase));


// <----------------function returning another function

// ----------------------1st method 



// let comliment = function(msg){
//     return function(name){
//         console.log(`${msg}${name}`);
//         return true; 
//     }
// };
// console.log(comliment("You are good coder ")("Sparta"));



// // ---------------------------2nd method
// let complimented = comliment("You are good coder");
// complimented("Rojers");



// <---------------------set timeout and set timeinterval---> 

// setTimeout  -> Run function once after interval of time 

// setInterval  -> run function repetedly Startin after the interval of time then reperting



// <<<<<<<------------------------setTimeout(function| code , delay,argu1,argu2,,,,,,)
// function greeting(){
//     console.log("Welcome to our coder help community");
// }
// setTimeout(greeting,3000)// given value in milisecond


// <<<<-----------Settimeinterval====================>

// setInterval=(greeting,100,"jhon")


// // <<<========================Hoisting============================>>>>>\
// console.log(sum)
// var sum = i+j
// var i = 10
// var j = 15

// only var and normal function declaration accepted hoisting -- hoisting means we can declare any where it and use anywhere like as variable and function declared in last and its used in first 

// //  <<<==================Objects ===================>>
// let car = {
//     color:"blue",
//     model:"alaska",
//     company:"honda",
//     model_no:"15463863"
// }
// console.log(car)

// //-------------how to access property in object---->
// console.log(car["color"])

// //   dot method
// console.log(car.company)

// let propertyNAme= "color";
// console.log(car[propertyNAme])
// console.log(car.propertyNAme)// use direct property name 


// // modify the object property
// car["color"] = "black"
// console.log(car["color"])


// // delete property in bject
// let obj = {
//     prop1 : "value1",
//     prop2 : "value2"
// }
// console.log(obj)
// delete obj["prop1"]// delete property always return true 
// console.log(obj)



// // <<<<===========Function vs Method ===================>>
// let agecalculation = function(birthyear){
//     let age = 2023-birthyear
//     console.log(`current age is : ${age}`)
// }
// console.log(agecalculation(2001))

// method >-- method is nothng but object property holding function as value

// let person = {
//     agecalculation : function(birthyear){
//         let age = 2023-birthyear
//          return age
//     }
// }
// console.log(`current age is : ${person.agecalculation(1990)}`)