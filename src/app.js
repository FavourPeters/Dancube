// UI
const nav = document.querySelector('#navi');
const list = document.querySelector('.list');



nav.addEventListener('click', function () {
    list.classList.remove('-translate-x-full');
});

list.addEventListener('mouseleave', rem_nav)

function rem_nav() {
    list.classList.add('-translate-x-full');
}
