// <<----------------------String and its methods ----------------->>

let firstName = 'sparta'
let lastName = 'rojers'
console.log(firstName,lastName);

//concatination 

console.log(firstName+lastName);
console.log(firstName + " " + lastName);


//using templet litrelas 
// in litrals we use tick (``)

let fullName = `My name is ${firstName} ${lastName}`;
console.log(fullName)


// 3.Getting string charcter 

// when we want some charcter in the string then we use indexing for example--

console.log(firstName[2]) // here firstName string use 2 index then print the charcter  by using console  

// ----------------String Method ---------------

// upperCase and Lowecse

console.log(firstName.toLowerCase())
console.log(lastName.toUpperCase())
console.log(lastName.indexOf('e'))


// some common method in String

let hobbies = '    coding        reading                  runnig                 '
console.log(hobbies)

// trin method----------
// it remove unnessery space and also its a part of data cleannig 


let result = hobbies.trim()
console.log(result)



// indexof
console.log(result.indexOf('coding'))
console.log(hobbies.indexOf('coding'))

// here trim remove the extra space in result thats why coding index is 0 and when we check coding index in the hobbies then its show 4 


// //---------------include method ]

// its method used for a particular charcter check include in specfic string thats mean we only check particular charcter are present in the specfic string or not 

console.log(result.includes('reading'))// its gives true 
console.log(result.includes('sparta')) // its give false because sparta is not present in result variable


//---------------slice mthod
// slice method used in the string for copy the charcter  to given indexes like as ---


let charge = 'programmer'
console.log(charge.slice(0,5))

//here slice method copy the string between 0 to 5 indexes and print the give the result  "progr"



// -------------These method can not modify the string its cannot mutate the string ---
//    1.trim()
//    2.slice()
//    3.indexof()
//    4.include()
   


// ---------------------------------------------------------------------------------------

// 1.split method------ its use to convert the string in two array and sotre them 

let favorColor = ' Brown blue black gray';
let arrColor = favorColor.split(` `);
console.log(arrColor);



// string are immutable -------

let str = 'hello'

str[0] = "p";
console.log(str);