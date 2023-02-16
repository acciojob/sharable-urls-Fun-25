// your code here
var h3=document.querySelector("url");
var nameElement=document.querySelector("name");
var yearElement=document.querySelector("year");
var button=document.querySelector("button");

function submitHandle(event) {
	event.preventDefault();
	 
		var h3value="https://localhost:8080/";
		var name=nameElement.value;
		var year=yearElement.value;
	if(name && year){
			h3value+='?name='+name + '&year='+year;
	}
	elseif(name && !year){
		h3value+='?name='+name
	}
	elseif(!name && year){
		h3value+='&year='+year;
	}
	h3.textContent=h3value;
}

form.addEventListener('submit',submitHandle);