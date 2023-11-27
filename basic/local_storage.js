// // -----------Local storage--------------

// // store and retrive date from database

// // for now our focus in on local Storage

// // store and retrive data from loacl Storage

// // is an api provided by browser to store date indie browser


// // console.log(localStorage)

// // set item

// localStorage.setItem('passion ', ' programming ')

// localStorage.setItem('age',24)

// // console.log(localStorage)



// // 2. getitem

// console.log(localStorage.getItem('age'))


// // 3. update

// localStorage.setItem("age",26); //overwrite the privious value
// console.log(localStorage.getItem('age'))


// // 4.Remove item

// localStorage.removeItem('age')
// localStorage.removeItem('passion')
console.log(localStorage)




// ------------------<  OOP's  >------------------------

// construtor function and the new operator

// prototype

// we can not use 'arrow' function as construtor

// call consturcor function using new kewwork 



let car = function(color,model){
    // properties


    this.color= color;
    this.model= model;
    this.login= function(){
        console.log("logged in ")
    }
}
//we can also set propperties to prototype
car.prototype.startEngine = function(){
    console.log('engine started')
}
console.log(car.prototype)

//method

let instanceOfCar = new car("car",2023)
let instant = new car("honda",2024)
console.log(instanceOfCar,instant)


let result = new car("black",2025)
console.log(result)



