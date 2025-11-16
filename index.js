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


btn.addEventListener ("click", function () {
        
    const inputValue = Number(value.value);

lengthEl.textContent = `${inputValue} meters = ${(inputValue * meter).toFixed(3)} feet | ${inputValue} feet = ${(inputValue / meter).toFixed(3)} meters`

volumeEl.textContent = `${inputValue} liters = ${(inputValue * liter).toFixed(3)} gallons | ${inputValue} gallons = ${(inputValue / liter).toFixed(3)} liters`

massEl.textContent = `${inputValue} kilos = ${(inputValue * kilogram).toFixed(3)} pounds | ${inputValue} pounds = ${(inputValue / kilogram).toFixed(3)} kilos`
})
