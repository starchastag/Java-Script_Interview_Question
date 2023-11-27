// ---------------Digital clock-----------

let hourHand = document.querySelectorAll('.hours');

let minuteHand = document.querySelectorAll('.minute');

let secondHand = document.querySelectorAll('.second');


let ticking = function(){

    let currentDate = new Date();

    console.log(currentDate)

    let getHour = currentDate.getHours();

    let getminute = currentDate.getMinutes();

    let getSecond = currentDate.getSeconds();

    hourHand.innerText = getHour;

    minuteHand.textContent = getminute;

    secondHand.textContent = getSecond;

    
}

setInterval(ticking,1000); //1000second