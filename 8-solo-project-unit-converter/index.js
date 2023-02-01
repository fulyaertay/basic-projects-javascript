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


convertBtn.addEventListener("click",function(){
    
    if (getInputVal.value>0){
        let convertedVal=Number(getInputVal.value)
        
        //convert meters vs feet
        metfet.textContent=`
        ${convertedVal} meters = ${(convertedVal*3.281).toFixed(3)} feet | 
        ${convertedVal} feet = ${(convertedVal*0.304).toFixed(3)} meters `
    
        //convert liters vs gallons
        liga.textContent=`
        ${convertedVal} liters = ${(convertedVal*0.264).toFixed(3)} gallons | 
        ${convertedVal} gallons = ${(convertedVal*3.785).toFixed(3)} liters `
    
        //convert kilos vs pounds
        kipo.textContent=`
        ${convertedVal} kilos = ${(convertedVal*2.204).toFixed(3)} pounds | 
        ${convertedVal} pounds = ${(convertedVal*0.480 ).toFixed(3)} kilos `
    
    }

    

    else{
        alert("You must enter a number to convert!")
    }
   

})