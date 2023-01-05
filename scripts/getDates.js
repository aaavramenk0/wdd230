let lastVisitDate = new Date(document.lastModified);
let lastVisitYear = lastVisitDate.getFullYear()
const date = document.getElementById('lastModified').innerHTML = lastVisitYear;