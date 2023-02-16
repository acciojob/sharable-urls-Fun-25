// your code here
var form=document.querySelector("form")
var h3=document.querySelector("h3");
var nameElement=document.querySelector("#name");
var yearElement=document.querySelector("#year");
var btn=document.querySelector("#button");

function submitHandle(event) {
	event.preventDefault();
	 
		var h3value="https://localhost:8080/";
		var name=nameElement.value;
		var year=yearElement.value;
	if(name && year){
			h3value+="?name="+name + "&year="+year;
	}
	else if(name && !year){
		h3value+="?name="+name
	}
	else if(!name && year){
		h3value+="?year="+year;
	}
	h3.textContent=h3value;
}

form.addEventListener('submit',submitHandle);
/*
var form = document.querySelector("form");
var h3 = document.querySelector("h3");
var nameELement = document.querySelector("#name");
var yearElement = document.querySelector("#year");
var btn = document.querySelector("#button");

function handleSubmit(event) {
  event.preventDefault();
  var h3Value = "https://localhost:8080/";
  var name = nameELement.value;
  var year = yearElement.value;

  if (name && year) {
    h3Value += "?name=" + name + "&year=" + year;
  } else if (name && !year) {
    h3Value += "?name=" + name;
  } else if (!name && year) {
    h3Value += "?year=" + year;
  }
  h3.textContent = h3Value;
}

form.addEventListener("submit", handleSubmit);*/