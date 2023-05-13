document.cookie = 'same-site-cookie=foo; SameSite=Lax';

function openClose() {
    const menu = document.querySelector(".mobile-menu-wrapper");
    if (menu.style.display == 'flex') {
        menu.style.display = 'none';
    }
    else {
        menu.style.display = 'flex';
    }
};

const burgerButton = document.querySelector('.nav-toggle');
burgerButton.addEventListener("click", openClose);



const dayTitles = document.querySelectorAll('.day-title');
dayTitles.forEach((dayTitle) => {
    dayTitle.addEventListener('mouseenter', () => {
        dayTitle.classList.remove('day-title');
        dayTitle.classList.add('highlighten');
    })
    dayTitle.addEventListener('mouseleave', () => {
        dayTitle.classList.remove('highlighten');
        dayTitle.classList.add('day-title');
    })
});
