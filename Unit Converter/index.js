/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.205 pound
*/

const btn = document.getElementById("btn")
const converterText = document.getElementById("first-converter")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const value = document.querySelector(".custom-input")


const meter = 3.281 
const liter = 0.264 
const kilogram = 2.205  

// CodeRabbit comment test 2

btn.addEventListener ("click", function () {
        
    lengthEl.textContent = `${inputValue} meters = ${(inputValue) * 3.281} feet | ${inputValue} feet = ${((inputValue)/3.281).toFixed(3)} meters`
    
    volumeEl.textContent = `${inputValue} liters = ${(inputValue) * 0.264} gallons | ${inputValue} gallons = ${((inputValue)/0.264).toFixed(3)} liters`
    
     massEl.textContent = `${inputValue} kilos = ${(inputValue) * 2.205} pounds | ${inputValue} pounds = ${((inputValue) / 2.205).toFixed(3)} kilos` 
})