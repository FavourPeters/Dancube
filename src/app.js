// UI
const nav = document.querySelector('#navi');
const list = document.querySelector('.list');
const closeNav = document.querySelector('#close');


// Show Navigation
nav.addEventListener('click', function () {
    list.classList.remove('-translate-x-full');
});

//Remove Navigation
list.addEventListener('mouseleave', rem_nav)
closeNav.addEventListener('click', rem_nav)

function rem_nav() {
    list.classList.add('-translate-x-full');
}
