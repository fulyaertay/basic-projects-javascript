/*
Measure Units
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


let convertBtn=document.getElementById("convertButton")
let metfet=document.getElementById("metfet")
let liga=document.getElementById("liga")
let kipo=document.getElementById("kipo")

let getInputVal=document.getElementById("inputText")


let convertMet=0
let covertFeet=0
let convertGallons=0
let convertLiters=0
let convertKg=0
let convertPounds=0

convertBtn.addEventListener("click",function(){
    
    if (getInputVal.value>0){
        let convertedVal=Number(getInputVal.value)
        

        metfet.textContent=`
        ${convertedVal}= meters=${convertedVal*3.281} feet | 
        ${convertedVal}= feet=${convertedVal*3.281} meters 
        
        Number(getInputVal.value)`
    }

    else{
        alert("You must enter a number to convert!")
    }
   

})