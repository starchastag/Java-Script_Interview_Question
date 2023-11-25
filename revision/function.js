// <=-----------------Function -------------------->
// it is a simply peace of code which we can use in our program any time 

// It is just like a variable holding some piece of code 

// 1.Declration -------

function nameOfFunction(){
    console.log('You are running code present inside the function')
}
nameOfFunction() //fucntion call (by using function name )
nameOfFunction()



//Function Expression

let fun = function(){ //also known as anonyms function 
    console.log('i am anonyms function ')

}
console.log(fun)
fun()



//------------------passing value with parameter and arguments 

// let invitation = function(name){ // here name is parameter 
//     console.log(`Wecome ! ${name} your welcome `)
// }
// invitation('sparta')// sparta is arguements


// //------------------returning value 

// let age = function(birthyear,currentyear=2024){
//     let aeg = currentyear - birthyear;
//     console.log(`your current age is  = ${aeg}`)
//     return aeg;
// }
// let functionResult = age(2002)
// console.log(functionResult)







// <----------------------Arrow Function ---------------->

// Special form of function Expression
// it allows us to write function more fast beacuse no need to use function keyword
// no need to use paranthesis in case of single parameter
// no need to use curly braces if single line code in function 
// no need to use returen statement if single line code in function



let invitation = name => {
    return `Welcome ${name} to this event`
}
console.log(invitation("coders"))





// <-----------------Passing function as an argument (Higher order function example )


let uppercase = function(str){
    return str.toUpperCase();
}
let lowercase = function(str){
    return str.toLowerCase();
}
let transform = function(str,fun){
    return fun(str);
}// here transform is higher order function because here function is passed as a arguments

console.log(transform('sparta',uppercase))



// <-----------------Function as immediately invoked -->
// iffi is a function where we declared function in the round braces and call them by using round braces ()  its cannot use as reuseable but sometime we want to execute the librarby continously


// (function(){
//     console.log("helo this is iifi");
// })('iffi')


// ------------------SetTimeout and set timeinterval----

// 1. setTimeout -- Run function once afer inerval of time 
// 2. setInterval --- Run function repetedly starting after the interval of time then repeting

// 1.-------------SetTimeout--

function greeting (){
    console.log("Welcome to web-lerner")
}
setTimeout(greeting,1000)

// ------if we want to some argument come in the function then we used like as ---->

function share (data){
    console.log(`Your ${data} has been uploaded`)

}
setTimeout(share,4000,'resume')


// ----------------or------

// setTimeout(function greeting(){
//     console.log('hii')
// },2000)





// <---------------SetInerval----------------<

// sane as settimeout--

// setInterval(greeting,1000)
setInterval(greeting,2000,'song')





// -<--------------------Function vs Method------------->

// 1.method >-- it is nothing but object property holding




// ------------------Function call and apply ------------------<<<<<<>>

let main = {
    airline:'flyindia',
    iatecode:'fi',
    bokking:[],
    book:function(flightnumber,name){
        console.log(`${name} booked flight on this ${this.airline} with this ${this.iatecode}`)
    }
}
main.book(553,'carlos')