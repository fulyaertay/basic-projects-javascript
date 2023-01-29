let homeBtn1=document.getElementById("home-1")
let homeBtn2=document.getElementById("home-2")
let homeBtn3=document.getElementById("home-3")

let guestBtn1=document.getElementById("guest-1")
let guestBtn2=document.getElementById("guest-2")
let guestBtn3=document.getElementById("guest-3")

let homeCounter=document.getElementById("home-counter")
let guestCounter=document.getElementById("guest-counter")

let increaseHome=0;
let increaseGuest=0;

//increase home counter
function homeAdd1(){
    increaseHome+=1;
    homeCounter.textContent= increaseHome;
    
}
function homeAdd2(){
    increaseHome+=2;
    homeCounter.textContent= increaseHome;
    
}
function homeAdd3(){
    increaseHome+=3;
    homeCounter.textContent= increaseHome;
    
}

//increase guest counter
function guestAdd1(){
    increaseGuest+=1;
    guestCounter.textContent=  increaseGuest;
    
}
function guestAdd2(){
    increaseGuest+=2;
    guestCounter.textContent=  increaseGuest;
    
}
function guestAdd3(){
    increaseGuest+=3;
    guestCounter.textContent=  increaseGuest;
    
}