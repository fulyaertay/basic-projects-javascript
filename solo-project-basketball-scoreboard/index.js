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

let guestContent=document.getElementsByClassName("guest-content")
//increase home counter
function homeAdd1(){
    increaseHome+=1;
    homeCounter.textContent= increaseHome;
    if (increaseHome > increaseGuest){
        homeCounter.style.color=" green";
        guestCounter.style.color="#F94F6D";
    }
    else{
        homeCounter.style.color="#F94F6D";
    }
    
}
function homeAdd2(){
    increaseHome+=2;
    homeCounter.textContent= increaseHome;
    if (increaseHome > increaseGuest){
        homeCounter.style.color=" green";
        guestCounter.style.color="#F94F6D";
    }
    else{
        homeCounter.style.color="#F94F6D";
    }
    
}
function homeAdd3(){
    increaseHome+=3;
    homeCounter.textContent= increaseHome;
    if (increaseHome > increaseGuest){
        homeCounter.style.color=" green";
        guestCounter.style.color="#F94F6D";
    }
    else{
        homeCounter.style.color="#F94F6D";
    }
    
}

//increase guest counter
function guestAdd1(){
    increaseGuest+=1;
    guestCounter.textContent=  increaseGuest;
    if (increaseGuest > increaseHome){
        guestCounter.style.color=" green";
        homeCounter.style.color="#F94F6D";
    }
    else{
        guestCounter.style.color="#F94F6D";
    }
    
}
function guestAdd2(){
    increaseGuest+=2;
    guestCounter.textContent=  increaseGuest;
    if (increaseGuest > increaseHome){
        guestCounter.style.color=" green";
        homeCounter.style.color="#F94F6D";
    }    else{
        guestCounter.style.color="#F94F6D";
    }
    
    
}
function guestAdd3(){
    increaseGuest+=3;
    guestCounter.textContent=  increaseGuest;
    if (increaseGuest > increaseHome){
        guestCounter.style.color=" green";
        homeCounter.style.color="#F94F6D";
    }    else{
        guestCounter.style.color="#F94F6D";
    }
    
    
}

let newButton=document.getElementsByClassName("newButton")
//reset when click new game button
function newGame(){
    increaseHome=0;
    increaseGuest=0;
    homeCounter.textContent=increaseHome;
    guestCounter.textContent=increaseGuest;
    guestCounter.style.color="#F94F6D";
    homeCounter.style.color="#F94F6D";


}