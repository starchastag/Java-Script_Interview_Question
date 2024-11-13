// let email = 'windcoder@emaple.com'
// let booleanvalue = email.includes("e")
// console.log(booleanvalue)


// // coparion operator is always give boolean value
// js is weakly typed language
//  ----- let name = 'sparta'
//  ----- let object = {name:'sparta'}


// beacuse in js we can not define variable type at the variable declaration its automatic detect the variable type and allocate the realted memory



// ----------------------Array and its method -----------

let letters = ['a', 'b', 'c', 'e']

// Reverse method (mutate the original array )

let reverse = letters.reverse();
console.log(reverse) // here give the output of reversed array 

console.log(letters) // its original array that also reversed


// 2. concatination (its not a mutating method )

let nums = [1, 2, 3, 4, 5, 6]
let concated = nums.concat(letters);

console.log(concated)


// 3.join  (its not a mutating method it cannot change the original array)

let joined = letters.join('_')
console.log(typeof joined, joined)




// 4. slice mthod (
//     used to extract part the Array
//     array .slice(startindex,lastindex (excluded))
//     return new array of extracted elements 
// )



let ogi = [3, 5, 6, 74, 6, 8, 4, 9, 6]
let extractArray = ogi.slice(2, 6) // 2 to 6 element in index 
console.log("extract array", extractArray)
console.log("original array", ogi)


// 5. spilce method (
//     used to dd new element into the Array
//     Array.spilce(indexValue,valuetoBeAdded)
//     return deleted items in the form of array 
//     its a mutating method its change the original array
// )


let nsg = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let newNsg = nsg.splice(2, 4, 8)
console.log("updated array", newNsg)
console.log("original array", nsg)


// 6. at method (
//     it is used for acessing array element and its also work with negative value of indexing that mean if i put -1 then it give last element of array

// //)
let ghi = [23, 54, 77, 85]
console.log(ghi[0])

// ========= here all method that give to last element of element in easy way 

console.log(ghi[ghi.length - 1])
console.log(ghi.slice(-1))
console.log(ghi.at(-1))

// at method also work with string 


let name = 'sparta'
console.log(name.at(-1))




// ---------------7.Map method --------------

// create new array from original array by appliying transformation function


let Sallarie = [2000, 3000, 5000, 4000, 8000, 7000, 6000];

let newSallarie = Sallarie.map(salary => {
    let increamentAmount = salary / 2;
    return salary + increamentAmount


})
console.log(newSallarie)



// ---------------------8.filter method -------------

// its used to perform filtaration on array

let gifts = ['watch', 'clock', 'teddy-bear', 'banana', 'pineapple']

// filtration apply then 

let newGift = gifts.filter(gift => {
    if (gift == 'watch' || gift == 'banana') {
        return gift
    }
})

console.log(newGift)




// -----------------9.reduce mthod ------------------

// run reducer function for each array element 
// arrya.reduce(fucntion (total,currentvalue),initilaization)
// it return single value


let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let sum = num1.reduce(function (total, currentValue) {
    return total + currentValue;
}, 0)

console.log(sum)




// 10.--------------------find method -------------

// it retrun first element we are looking for ...............

let student = [{ id: 1, name: 'spar', }]

let result = student.find(student => {
    return student.id === 1
})

console.log(result)




// 11.--------------findIndex method -----------



// execute function for each array element 
// it return index of that array element who first pass the test otherwise -1 




let ages = [21, 22, 25, 26, 28]

let age = ages.findIndex(age => {
    return age > 25
})
console.log(age)



// 12.--------------somme and every method -----------

// some method return 'true ' if 'any' array elemeent pass in the test 

// every method return ' true ' if 'all' array element pass in the tes 


let score = [20, 23, 24, 25, 26, 28, 29]

let rol = score.some(score => {
    return score > 25
})
console.log(rol)

let nreRol = score.every(score => {
    return score > 10
})

console.log(nreRol)





// 13.-----flat method ----------


// flat method is create a new array with the element of the sub array concatenation into it . 


let arra = [1, 23, 3, [4, 5, 6]]
console.log('original array ', arra)


let arraReslut = arra.flat(1, 2);
console.log('flat array ', arraReslut)


// 14.----------flatmap method ------------

// it is the combination of the 'map( )' method 
// followed by the 'flat() method of depth 'i'



let cart = [{
    name: 'mobile',
    qty: 2,
    price: 4000
}, {
    name: 'screengaurd',
    qty: 2,
    price: 400
}]


let newCart = cart .flatMap(item => {
    if (item.name === 'mobile'){
        return [item,{
            name:"headphone",
            qty:2,
            price:0
        }]
    }else {
        return[item]
    }
})

console.log(newCart)





// 15.------------sorting of array -------


// sorting using sort method 
// by default sort method is used to sort string 
// it firstly convert everything into string and then sorting the array --------------------......Sallarie.map.call.bind.


// let letter = ['d','e','c','a','b']
// console.log("unsorted array ",kno )
// console.log(letter.sort());


// let kno = [2,5,6,8,9,6,4,9,3,4]
// console.log(kno.sort())


// -----here a simple sorting algorigthm that revese the array and give the output 




// let knos = kno.sort((a,b) =>{
//     if(a<b){
//         return -1 
//     }
//     if(a>b){
//         return 1
//     }else {
//         return kno;
//     }
// })


// console.log("sorted array ",knos)




// 16. -------------------chain of method -------/--



let ghk = [1,2,3,4,5,6,7,8]


let ghkResult = ghk.slice(0,4).splice(1,1).push(10)
console.log(ghkResult)