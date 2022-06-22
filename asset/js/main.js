const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const menu = $('#menu');
const header = $('a[href*="#"]');
const a = $$('a');
menu.onclick = () => {
    menu.classList.toggle('fa-bars')
    menu.classList.toggle('fa-times')
    header.classList.toggle('toggle')

}

function remove() {
    menu.classList.remove('fa-times')
    header.classList.remove('toggle')
}
window.onload = () => {
    remove()
};
$$('').onclick = function(e) {
    e.preventDefault();
    $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }), 500,
        'linear'

}