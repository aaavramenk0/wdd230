/* Page rating script */
const rating = document.getElementById("rating");
const rangevalue = document.getElementById("page-rating");
const username = document.getElementById('username');
const usernameRepeat = document.getElementById('username-repeat');
const message = document.querySelector("#formmessage");
const formBtn = document.getElementById('form-btn')
/* Form */
const table = document.querySelector('.table')
const name = document.getElementById('name');
const outputName = document.getElementById('output-name');
const email = document.getElementById('email');
const outputEmail = document.getElementById('output-email');
const outputRating = document.getElementById('output-rating');
const outputUsername = document.getElementById('output-username');

function displayRatingValue() {
    rating.innerHTML = rangevalue.value;
}

rangevalue.addEventListener('change', displayRatingValue);
rangevalue.addEventListener('input', displayRatingValue);

formBtn.addEventListener('click', (e) => {
    if (username.value !== usernameRepeat.value ) {
        message.textContent = "Usernames DO NOT MATCH!";
		message.style.display = "block";
		usernameRepeat.style.backgroundColor = "#aa3333";
		usernameRepeat.style.color = "#fff";
		usernameRepeat.focus();
		usernameRepeat.value = "";
    } else if (username.value.length > 0 && usernameRepeat.value.length > 0){
		message.style.display = "none";
		usernameRepeat.style.backgroundColor = "#fff";
		usernameRepeat.style.color = "#000";
        table.style.display = 'block';
        outputName.innerText = name.value 
        outputEmail.innerText = email.value 
        outputRating.innerText = rangevalue.value
        outputUsername.innerText = username.value;
        e.preventDefault();
	}
})