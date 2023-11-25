// --------------Introduction to object in javascript--


let car = {
    color:"black",
    model:"2023",
    company:"Honda"
}

console.log(car);

///Accessing properties in object

console.log(car["color"])
console.log(car.company)

let properties = "color"

console.log(car[properties])
console.log(car.color)


// --------------Modify the object ----------------

car.color="red"
console.log(car.color)



//---------------------Delete properties in object----

let obj1 ={
    prop1:"value1",
    prop2:"value2"
}
console.log(obj1)

delete obj1.prop1

console.log(obj1)