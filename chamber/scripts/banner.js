let today = new Date();

// Get the modal
var modal = document.getElementById("banner");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

const openBanner = () => {
  modal.style.display = "block";
}
if (today.getDay() === 1 || today.getDay() === 2 || today.getDay() === 3) {
    openBanner();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}