const toggleButton = document.getElementById('toggle-btn');
const navbar = document.querySelector('.navbar');
const navbarLinks = document.querySelectorAll('.navbar a');
const menuBtn = document.getElementById('menu-btn');
const card = document.querySelectorAll('.card');
const footer = document.querySelector('footer')

let isDark;

toggleButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (isDark === true) {
        toLightTheme();
    } else {
        toDarkTheme();
    }
})

const toDarkTheme = () => {
    navbar.style.backgroundColor = 'white';
    for (let i = 0; i < 3; i++) {
        navbarLinks[i].style.color = 'black';
    }
    for (let k = 0; k < card.length; k++) {
        card[k].style.backgroundColor = '#00FF40'
        card[k].style.color = 'black'
    }
    
    menuBtn.style.color = 'black';
    document.body.style.color = 'white';
    document.body.style.backgroundColor = 'black';
    isDark = true; 
}
const toLightTheme = () => {
    navbar.style.backgroundColor = 'black';
    for (let i = 0; i < 3; i++) {
        navbarLinks[i].style.color = 'white';
    }
    menuBtn.style.color = 'white';
    document.body.style.color = 'black';
    document.body.style.backgroundColor = 'white';
    isDark = false; 
}