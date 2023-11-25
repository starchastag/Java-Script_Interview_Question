// <---------------This keyword----------------------<<

// in each method we have an access of special keyword called 'this'
// 'this' keyword represent the object . "calling" the method in which 'this'is present

// -----------Example->>>>

let person = {
    name : 'rojers',
    height : '5.8',
    color: 'brown',
    hobbies : 'singing',
    getSummry : function(){
        return `${this.name} is web developer he lives in delhi his height is ${this.height} and his color is ${this.color} and hobbies ${this.hobbies}`
    }
}

console.log(person.getSummry())



// -------object inside array----------------<

let blocklist = [{username:'jhon',reason:'abousive content'},{username:'paul',reason:'copyright content'}]


console.log(blocklist)

for (let i=0; i<blocklist.length;i++){
    console.log(`${blocklist[i].username} blocked due to this reason ${blocklist[i].reason}`)
}



// <<------------------------Math object --------------------->>>

console.log(Math)


// .round --- its gives nearest integers 
// Math.floor -- its give smallest intergers number 
// math.ceil -- its 
