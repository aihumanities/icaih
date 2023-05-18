function popOpen() {

    const modalPop = document.querySelector(".modal-wrap");
    const modalBg = document.querySelector(".modal-background"); 

    if (modalBg.style.display == 'flex') {
        modalPop.style.display = 'none';
        modalBg.style.display = 'none';
    }
    else {
        modalPop.style.display = 'none';
        modalBg.style.display = 'flex';
    }

}

const popUp = document.querySelector('.modal-wrap');
popUp.addEventListener("click", popOpen);