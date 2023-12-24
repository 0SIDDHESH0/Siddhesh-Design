function navbarOpen(){
    const navbar = document.querySelector('.nav-mob-list');
    navbar.style.display = 'flex';
    const hideMenu = document.querySelector('.nav-open-icon');
    hideMenu.style.display = 'none';
    const closeMenu = document.querySelector('.nav-close-icon');
    closeMenu.style.display = 'flex';
}
function navbarClose(){
    const navbar = document.querySelector('.nav-mob-list');
    navbar.style.display = 'none';
    const hideMenu = document.querySelector('.nav-open-icon');
    hideMenu.style.display = 'flex';
    const closeMenu = document.querySelector('.nav-close-icon');
    closeMenu.style.display = 'none';
}
