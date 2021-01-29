const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate(){
    const now = new Date();
    
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    /* Conversion to degrees */
    const degreeSeconds = (seconds*360)/60 + 90;
    const degreeMinutes = (minutes*360)/60 + 90;
    const degreeHours = (hours*360)/12 + 90;

    /* Applying the degrees to the clock's hands */
    secondHand.style.transform = `rotate(${degreeSeconds}deg)`;
    minuteHand.style.transform = `rotate(${degreeMinutes}deg)`;
    hourHand.style.transform = `rotate(${degreeHours}deg)`;
}

setInterval(setDate, 1000);