
let button = document.querySelector(".button");

// console.log (date);

let container = document.querySelector(".wrapper");
let dateDiv = document.createElement("div");


function displayDate(){
	let date = new Date();
	container.appendChild(dateDiv);
	dateDiv.classList.add("date");
	dateDiv.innerHTML = date;
}

function clearDate(){
	dateDiv.innerHTML = " ";
}


displayDate();


button.addEventListener("click", clearDate);
button.addEventListener("click", displayDate);


