
function submit() {
	var question = document.querySelector("#postTitle").value;
	var message = document.querySelector("#postMessage").value;

	if(question.length) {
		addMessage(question, message);
	} else {
		alert("You must include a question.");
	}
}

function addMessage(question, message) {
	var awaitingResponse = document.createElement("h6");
	awaitingResponse.innerHTML = "Someone will be around shortly to answer this question!";

	var row = document.createElement("div");
	row.classList.add("row");

	var column = document.createElement("div");
	column.classList.add("col");
	column.classList.add("s12");
	column.classList.add("m8");
	column.classList.add("offset-m2");

	var title = document.createElement("h4");
	title.innerHTML = question;

	var content = document.createElement("p");
	content.innerHTML = message;

	var date = document.createElement("h6");
	date.classList.add("right-align");
	date.innerHTML = "Posted " + Date().substring(4, 15);

	var divider = document.createElement("hr");

	var messages = document.getElementById("messages");

	row.appendChild(column);
	column.appendChild(title);
	column.appendChild(content);
	column.appendChild(date);
	column.appendChild(awaitingResponse);

	$("#messages").prepend(row);
	$(divider).insertAfter(row);
}
