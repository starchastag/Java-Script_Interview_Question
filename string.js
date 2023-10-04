let str = "har\""
console.log(str.length)


//Practise set 2
const sen = 'The quick brown fox jumps over the lazy dog.'; 
const word = 'fox' 
console.log(`The word "${word}" ${sen.includes(word) ? 'is' : 'is not'} in the sen`); 
/*
it print the "the word fox is in the sen."
*/

//Practise set 3

let x = "sparta"
console.log(x.toUpperCase)

//Practise set 4

let str2 = "The ammount is 2000"
let ammount = Number.parseInt(str2.slice(15))
// let ammount = str2.slice("The ammount is ".length)
console.log(ammount)
console.log(typeof ammount)