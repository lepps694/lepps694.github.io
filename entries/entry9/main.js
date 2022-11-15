let body = document.body;

function turnOnMetro1() {
  body.classList.toggle("metro1on")
}

let metro1 = document.querySelector(".metro1")
metro1.addEventListener("click", turnOnMetro1);

function turnOnMetro2() {
  body.classList.toggle("metro2on")
}

let metro2 = document.querySelector(".metro2")
metro2.addEventListener("click", turnOnMetro2);

function turnPastaOn() {
  body.classList.toggle("pastaOn")
}

let pasta = document.querySelector(".pasta")
pasta.addEventListener("click", turnPastaOn);

function turnStreetOn(){
  body.classList.toggle("streetOn")
}

let street = document.querySelector(".street")
street.addEventListener("click", turnStreetOn)



// let colors = ["#ab2807", "#080808", "#b00409"];#d17104