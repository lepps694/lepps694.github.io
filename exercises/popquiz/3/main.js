

// console.log (date);

let container = document.querySelector(".wrapper");
let dateDiv = document.createElement("div");
let otherText = document.createElement("span");
let bgcolors = ["tomato", "#83918b", "#898989", "#ab93b9", "#c0a63e", "#a2d1e4"];
let randBg = bgcolors[Math.floor(Math.random())];

function displayDate(){
	let date = new Date();
	container.appendChild(otherText);
	container.appendChild(dateDiv);
	dateDiv.classList.add("date");
	otherText.classList.add("other");
	otherText.innerHTML = "Right now it is:";
	dateDiv.innerHTML = date;


}

function clearDate(){
	dateDiv.innerHTML = " ";
}


displayDate();
setInterval(displayDate, 1000);


