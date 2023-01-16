const links = document.querySelectorAll('nav a')
const menuButton = document.getElementById('menu-btn');
const overlayMenu = document.getElementById('overlay')

menuButton.addEventListener('click', () => {
    if (menuButton.innerHTML == 'menu') {
        overlayMenu.style.display = 'block'
        menuButton.innerHTML = 'close';
    } else if (menuButton.innerHTML == 'close') {
        overlayMenu.style.display = 'none'
        menuButton.innerHTML = 'menu';
    }
    
})