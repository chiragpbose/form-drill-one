function seterror(id, error) {
	//console.log("hello");
	let errorElement = document.getElementById(id);
	errorElement.querySelector(".formerror").innerHTML = error;
}
function clearErrors() {
	errors = document.getElementsByClassName("formerror");
	console.log(errors.length);

	for (let i = 0; i < errors.length; i++) {
		errors[i].innerHTML = "";
	}
}

document.querySelector(".myForm").addEventListener("submit", validateForm);
function validateForm(e) {
	e.preventDefault();
	let returnval = true;

	clearErrors();

	let name = document.forms["myForm"]["name"].value;
	//console.log(name);
	if (name.length < 5) {
		seterror("name", "*length of name is too short");
		returnval = false;
	}

	let email = document.forms["myForm"]["email"].value;
	//console.log(email);
	if (email.length >= 30) {
		seterror("email", "*email address is too long");
		returnval = false;
	}
	if (email.length < 3) {
		seterror("email", "*email address is too short");
		returnval = false;
	}
	let colorSelected = document.querySelector("input[type=color]").value;
	let checkbox = document.querySelector("input[type=checkbox]");

	let rating = document.querySelector("input[type=range]").value;
	if (!checkbox.checked) {
		seterror("checkbox", "*you must accept the T&C");
		returnval = false;
	}
	let selectValue = document.querySelector("#love");
	console.log(selectValue.value);
	let checkRadios = document.querySelectorAll("input[type=radio]");
	let bool = false;
	let checkedRadio = "";
	for (let index = 0; index < checkRadios.length; index++) {
		if (checkRadios[index].checked) {
			checkedRadio = checkRadios[index].nextElementSibling.innerHTML;
			bool = true;
		}
	}
	console.log(checkedRadio);
	if (bool == false) {
		seterror("radio", "*you have to select at least one genre!");
		returnval = false;
	}

	if (returnval == true) {
		let newDiv = document.createElement("div");
		newDiv.classList.add("newDiv");
		document.body.append(newDiv);
		document.querySelector(".form-container").style.display = "none";
		newDiv.style.width = "70%";
		newDiv.style.height = "70%";
		newDiv.style.backgroundColor = "white";
		//newDiv.style.position = "absolute";
		newDiv.style.display = "flex";
		newDiv.style.flexDirection = "column";
		newDiv.style.alignItems = "flex-start";
		newDiv.style.justifyContent = "space-around";
		newDiv.style.padding = "10px";
		newDiv.innerHTML = `
		
		<div class="button-box">
		<button class="closeButton">Close</button></div>
		<h1>Hello ${name}</h1>
		<h4>Email: ${email}</h4>
		<h4>You love: ${selectValue.value}</h4>
		<h4>Color: ${colorSelected}</h4>
		<h4>Rating: ${rating}</h4>
		<h4>Book genre: ${checkedRadio}</h4>
		<h4 class="last-line">👉You agree to terms and Condition</h4>`;

		document.querySelector(".closeButton").addEventListener("click", () => {
			location.reload();
		});
		document.querySelector(".closeButton").style.width = "20vw";
	}

	return returnval;
}
