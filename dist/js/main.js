const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const Nav = document.querySelector('.nav')
const menuNav = document.querySelector('.menu-nav')
const menuitem = document.querySelectorAll('.menu-nav__item')

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        hamburger.classList.add('open')
        Nav.classList.add('open')
        menuNav.classList.add('open')
        menuitem.forEach(element => {
            element.classList.add('open')
        });
        showMenu= true;
    }else{
        hamburger.classList.remove('open')
        Nav.classList.remove('open')
        menuNav.classList.remove('open')
        menuitem.forEach(element => {
            element.classList.remove('open')
        });
        showMenu = false;
    }
}