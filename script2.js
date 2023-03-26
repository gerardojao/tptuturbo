const toggleMenuElement = document.getElementById('toggle-menu');
const mainMenuElement = document.getElementById('main-menu');
const linkMenu = document.getElementById('main-menu__link');


toggleMenuElement.addEventListener('click', () =>{
    mainMenuElement.classList.toggle('main-menu--show')
})

linkMenu.addEventListener('click', () =>{
    mainMenuElement.classList.toggle('main-menu--show')
})
