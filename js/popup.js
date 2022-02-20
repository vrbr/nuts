document.addEventListener('DOMContentLoaded', function() {
    const modalButtons = document.querySelectorAll('.calculator-btn');
    const overlay = document.querySelector('.js-overlay-modal');
    const popupOpen = document.querySelector('.popup-order');
    const closeButtons = document.querySelectorAll('.button-close');

    const disableScroll = () => {
        const widthScroll = window.innerWidth - document.body.offsetWidth;
    
        document.body.dbScrollY = window.scrollY;
    
        document.body.style.cssText = `
            position: fixed;
            top: ${-window.scrollY}px;
            left: 0;
            width: 100%;
            height: 100vh;
            overflow: hidden;
            padding-rigth: ${widthScroll}px;
        `;
    };

    const anableScroll = () => {
        document.body.style.cssText = '';
        window.scroll({
            top: document.body.dbScrollY
        })
    };

    modalButtons.forEach((item) => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            popupOpen.classList.add('is-active');
            overlay.classList.add('is-active');
            disableScroll();
        });
    });

    closeButtons.forEach((item) => {
        item.addEventListener('click', function(e) {
            popupOpen.classList.remove('is-active');
            overlay.classList.remove('is-active');
            anableScroll();
        });
    });

    document.body.addEventListener('keyup', function (e) {
        const key = e.keyCode;

        if (key == 27) {
            document.querySelector('.popup.is-active').classList.remove('is-active');
            document.querySelector('.overlay').classList.remove('is-active');
            anableScroll();
        };
    }, false);

    overlay.addEventListener('click', function() {
        document.querySelector('.popup.is-active').classList.remove('is-active');
        this.classList.remove('is-active');
        anableScroll();
    });
});