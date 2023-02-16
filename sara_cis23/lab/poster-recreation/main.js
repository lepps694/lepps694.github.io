let body = document.body;

function turnOnS1(){
	body.classList.toggle("s1on")
}

let s1 = document.querySelector(".s1")
s1.addEventListener("mouseover", turnOnS1);

function turnOns2(){
	body.classList.toggle("s2on")
}

let s2 = document.querySelector(".s2")
s2.addEventListener("mouseover",turnOns2);

function turnOns3(){
	body.classList.toggle("s3on")
}

let s3 = document.querySelector(".s3")
s3.addEventListener("mouseover", turnOns3);

function turnOns4(){
	body.classList.toggle("s4on")
}

let s4 = document.querySelector(".s4")
s4.addEventListener("mouseover", turnOns4);