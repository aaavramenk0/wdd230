/* Page rating script */
const rating = document.getElementById("rating");
const rangevalue = document.getElementById("page-rating");

function displayRatingValue() {
    rating.innerHTML = rangevalue.value;
}

rangevalue.addEventListener('change', displayRatingValue);
rangevalue.addEventListener('input', displayRatingValue);