const menuItems = document.querySelectorAll('nav a');
const menuButton = document.getElementById('menu-btn')

menuButton.addEventListener('click', () => {
    for (let itemIndex = 0; itemIndex < menuItems.length; itemIndex++) {
        menuItems[itemIndex].classList.toggle('invisible')        
    }
})
