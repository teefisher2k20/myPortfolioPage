const hamburgerButton = document.getElementById('hamnurger');
const navList = document.getElementById('nav-list');

function toggleButton ()
{
    navList.classList.toggle('show');
}
hamburgerButton.addEventListener('click', toggleButton);