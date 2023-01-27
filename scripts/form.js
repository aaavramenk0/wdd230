let username = document.getElementById('username')
let usernameRepeat = document.getElementById('username-repeat')
const inputTable = document.getElementById('input-table')

const checkUsernameMatch = () => {
    
    if(username === usernameRepeat) {
        inputTable.style.display = flex;
        document.querySelector('h2').innerHTML = 2
    } else {
        usernameRepeat.focus();
    }
}

/* Page rating script */
const rating = document.getElementById("rating");
const rangevalue = document.getElementById("page-rating");

function displayRatingValue() {
    rating.innerHTML = rangevalue.value;
}

rangevalue.addEventListener('change', displayRatingValue);
rangevalue.addEventListener('input', displayRatingValue);