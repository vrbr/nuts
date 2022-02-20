/*size1*/
const selectSingle = document.querySelector('.size1');
const selectSingle_title = selectSingle.querySelector('.size-title1');
const selectSingle_labels = selectSingle.querySelectorAll('.size-label1');

selectSingle_title.addEventListener('click', () => {
    if ('active' === selectSingle.getAttribute('data-state')) {
        selectSingle.setAttribute('data-state', '');
    } else {
        selectSingle.setAttribute('data-state', 'active');
    }
});

selectSingle_labels.forEach((item) => {
    item.addEventListener('click', (evt) => {
        selectSingle_title.textContent = evt.target.textContent;
        selectSingle.setAttribute('data-state', '');

        selectSingle_labels.forEach((i) => {
            i.classList.remove('label-checked');
        });

        evt.target.classList.add('label-checked')
    });
});

//////////////

/*size2*/
const selectSingle2 = document.querySelector('.size2');
const selectSingle_title2 = selectSingle2.querySelector('.size-title2');
const selectSingle_labels2 = selectSingle2.querySelectorAll('.size-label2');

selectSingle_title2.addEventListener('click', () => {
    if ('active' === selectSingle2.getAttribute('data-state')) {
        selectSingle2.setAttribute('data-state', '');
    } else {
        selectSingle2.setAttribute('data-state', 'active');
    }
});

selectSingle_labels2.forEach((item) => {
    item.addEventListener('click', (evt) => {
        selectSingle_title2.textContent = evt.target.textContent;
        selectSingle2.setAttribute('data-state', '');

        selectSingle_labels2.forEach((i) => {
            i.classList.remove('label-checked');
        });

        evt.target.classList.add('label-checked')
    });
});

/////////////

/*size3*/
const selectSingle3 = document.querySelector('.size3');
const selectSingle_title3 = selectSingle3.querySelector('.size-title3');
const selectSingle_labels3 = selectSingle3.querySelectorAll('.size-label3');

selectSingle_title3.addEventListener('click', () => {
    if ('active' === selectSingle3.getAttribute('data-state')) {
        selectSingle3.setAttribute('data-state', '');
    } else {
        selectSingle3.setAttribute('data-state', 'active');
    }
});

selectSingle_labels3.forEach((item) => {
    item.addEventListener('click', (evt) => {
        selectSingle_title3.textContent = evt.target.textContent;
        selectSingle3.setAttribute('data-state', '');

        selectSingle_labels3.forEach((i) => {
            i.classList.remove('label-checked');
        });

        evt.target.classList.add('label-checked')
    });
});

/////////////

/*size4*/
const selectSingle4 = document.querySelector('.size4');
const selectSingle_title4 = selectSingle4.querySelector('.size-title4');
const selectSingle_labels4 = selectSingle4.querySelectorAll('.size-label4');

selectSingle_title4.addEventListener('click', () => {
    if ('active' === selectSingle4.getAttribute('data-state')) {
        selectSingle4.setAttribute('data-state', '');
    } else {
        selectSingle4.setAttribute('data-state', 'active');
    }
});

selectSingle_labels4.forEach((item) => {
    item.addEventListener('click', (evt) => {
        selectSingle_title4.textContent = evt.target.textContent;
        selectSingle4.setAttribute('data-state', '');

        selectSingle_labels4.forEach((i) => {
            i.classList.remove('label-checked');
        });

        evt.target.classList.add('label-checked')
    });
});

/*quantity4*/
const selectQuantity4 = document.querySelector('.quantity4');
const selectQuantity_title4 = selectQuantity4.querySelector('.quantity-title4');
const selectQuantity_labels4 = selectQuantity4.querySelectorAll('.quantity-label4');

selectQuantity_title4.addEventListener('click', () => {
    if ('active' === selectQuantity4.getAttribute('data-state')) {
        selectQuantity4.setAttribute('data-state', '');
    } else {
        selectQuantity4.setAttribute('data-state', 'active');
    }
});

selectQuantity_labels4.forEach((item) => {
    item.addEventListener('click', (evt) => {
        selectQuantity_title4.textContent = evt.target.textContent;
        selectQuantity4.setAttribute('data-state', '');

        selectQuantity_labels4.forEach((i) => {
            i.classList.remove('label-checked');
        });

        evt.target.classList.add('label-checked')
    });
});

/////////////

/*size5*/
const selectSingle5 = document.querySelector('.size5');
const selectSingle_title5 = selectSingle5.querySelector('.size-title5');
const selectSingle_labels5 = selectSingle5.querySelectorAll('.size-label5');

selectSingle_title5.addEventListener('click', () => {
    if ('active' === selectSingle5.getAttribute('data-state')) {
        selectSingle5.setAttribute('data-state', '');
    } else {
        selectSingle5.setAttribute('data-state', 'active');
    }
});

selectSingle_labels5.forEach((item) => {
    item.addEventListener('click', (evt) => {
        selectSingle_title5.textContent = evt.target.textContent;
        selectSingle5.setAttribute('data-state', '');

        selectSingle_labels5.forEach((i) => {
            i.classList.remove('label-checked');
        });

        evt.target.classList.add('label-checked')
    });
});

/////////////

/*size6*/
const selectSingle6 = document.querySelector('.size6');
const selectSingle_title6 = selectSingle6.querySelector('.size-title6');
const selectSingle_labels6 = selectSingle6.querySelectorAll('.size-label6');

selectSingle_title6.addEventListener('click', () => {
    if ('active' === selectSingle6.getAttribute('data-state')) {
        selectSingle6.setAttribute('data-state', '');
    } else {
        selectSingle6.setAttribute('data-state', 'active');
    }
});

selectSingle_labels6.forEach((item) => {
    item.addEventListener('click', (evt) => {
        selectSingle_title6.textContent = evt.target.textContent;
        selectSingle6.setAttribute('data-state', '');

        selectSingle_labels6.forEach((i) => {
            i.classList.remove('label-checked');
        });

        evt.target.classList.add('label-checked')
    });
});

/////////////

/*size7*/
const selectSingle7 = document.querySelector('.size7');
const selectSingle_title7 = selectSingle7.querySelector('.size-title7');
const selectSingle_labels7 = selectSingle7.querySelectorAll('.size-label7');

selectSingle_title7.addEventListener('click', () => {
    if ('active' === selectSingle7.getAttribute('data-state')) {
        selectSingle7.setAttribute('data-state', '');
    } else {
        selectSingle7.setAttribute('data-state', 'active');
    }
});

selectSingle_labels7.forEach((item) => {
    item.addEventListener('click', (evt) => {
        selectSingle_title7.textContent = evt.target.textContent;
        selectSingle7.setAttribute('data-state', '');

        selectSingle_labels7.forEach((i) => {
            i.classList.remove('label-checked');
        });

        evt.target.classList.add('label-checked')
    });
});

/////////////

/*size8*/
const selectSingle8 = document.querySelector('.size8');
const selectSingle_title8 = selectSingle8.querySelector('.size-title8');
const selectSingle_labels8 = selectSingle8.querySelectorAll('.size-label8');

selectSingle_title8.addEventListener('click', () => {
    if ('active' === selectSingle8.getAttribute('data-state')) {
        selectSingle8.setAttribute('data-state', '');
    } else {
        selectSingle8.setAttribute('data-state', 'active');
    }
});

selectSingle_labels8.forEach((item) => {
    item.addEventListener('click', (evt) => {
        selectSingle_title8.textContent = evt.target.textContent;
        selectSingle8.setAttribute('data-state', '');

        selectSingle_labels8.forEach((i) => {
            i.classList.remove('label-checked');
        });

        evt.target.classList.add('label-checked')
    });
});