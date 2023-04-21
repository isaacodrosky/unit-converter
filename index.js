// HTML Elements
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

// Conversion Rates
const metersToFeet = 3.281
const litersToGallons = 0.264
const kilogramsToPounds = 2.204

convertBtn.addEventListener("click", function() {
    // store user input in variable - ensure typeof = number
    const userInput = Number(inputEl.value)
    // set each section to display user input number and converted number, rounded to 3 decimal places
    lengthEl.textContent = `
        ${userInput} meters = ${(userInput * metersToFeet).toFixed(3)} feet | 
        ${userInput} feet = ${(userInput / metersToFeet).toFixed(3)} meters`
    volumeEl.textContent = `
        ${userInput} liters = ${(userInput * litersToGallons).toFixed(3)} gallons | 
        ${userInput} gallons = ${(userInput / litersToGallons).toFixed(3)} liters`
    massEl.textContent = `
        ${userInput} kilograms = ${(userInput * kilogramsToPounds).toFixed(3)} pounds | 
        ${userInput} pounds = ${(userInput / kilogramsToPounds).toFixed(3)} kilograms`
})
