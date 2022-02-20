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

/*quantity1*/
const selectQuantity = document.querySelector('.quantity1');
const selectQuantity_title = selectQuantity.querySelector('.quantity-title1');
const selectQuantity_labels = selectQuantity.querySelectorAll('.quantity-label1');

selectQuantity_title.addEventListener('click', () => {
    if ('active' === selectQuantity.getAttribute('data-state')) {
        selectQuantity.setAttribute('data-state', '');
    } else {
        selectQuantity.setAttribute('data-state', 'active');
    }
});

selectQuantity_labels.forEach((item) => {
    item.addEventListener('click', (evt) => {
        selectQuantity_title.textContent = evt.target.textContent;
        selectQuantity.setAttribute('data-state', '');

        selectQuantity_labels.forEach((i) => {
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

/*quantity2*/
const selectQuantity2 = document.querySelector('.quantity2');
const selectQuantity_title2 = selectQuantity2.querySelector('.quantity-title2');
const selectQuantity_labels2 = selectQuantity2.querySelectorAll('.quantity-label2');

selectQuantity_title2.addEventListener('click', () => {
    if ('active' === selectQuantity2.getAttribute('data-state')) {
        selectQuantity2.setAttribute('data-state', '');
    } else {
        selectQuantity2.setAttribute('data-state', 'active');
    }
});

selectQuantity_labels2.forEach((item) => {
    item.addEventListener('click', (evt) => {
        selectQuantity_title2.textContent = evt.target.textContent;
        selectQuantity2.setAttribute('data-state', '');

        selectQuantity_labels2.forEach((i) => {
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

/*quantity3*/
const selectQuantity3 = document.querySelector('.quantity3');
const selectQuantity_title3 = selectQuantity3.querySelector('.quantity-title3');
const selectQuantity_labels3 = selectQuantity3.querySelectorAll('.quantity-label3');

selectQuantity_title3.addEventListener('click', () => {
    if ('active' === selectQuantity3.getAttribute('data-state')) {
        selectQuantity3.setAttribute('data-state', '');
    } else {
        selectQuantity3.setAttribute('data-state', 'active');
    }
});

selectQuantity_labels3.forEach((item) => {
    item.addEventListener('click', (evt) => {
        selectQuantity_title3.textContent = evt.target.textContent;
        selectQuantity3.setAttribute('data-state', '');

        selectQuantity_labels3.forEach((i) => {
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

/*quantity5*/
const selectQuantity5 = document.querySelector('.quantity5');
const selectQuantity_title5 = selectQuantity5.querySelector('.quantity-title5');
const selectQuantity_labels5 = selectQuantity5.querySelectorAll('.quantity-label5');

selectQuantity_title5.addEventListener('click', () => {
    if ('active' === selectQuantity5.getAttribute('data-state')) {
        selectQuantity5.setAttribute('data-state', '');
    } else {
        selectQuantity5.setAttribute('data-state', 'active');
    }
});

selectQuantity_labels5.forEach((item) => {
    item.addEventListener('click', (evt) => {
        selectQuantity_title5.textContent = evt.target.textContent;
        selectQuantity5.setAttribute('data-state', '');

        selectQuantity_labels5.forEach((i) => {
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

/*quantity6*/
const selectQuantity6 = document.querySelector('.quantity6');
const selectQuantity_title6 = selectQuantity6.querySelector('.quantity-title6');
const selectQuantity_labels6 = selectQuantity6.querySelectorAll('.quantity-label6');

selectQuantity_title6.addEventListener('click', () => {
    if ('active' === selectQuantity6.getAttribute('data-state')) {
        selectQuantity6.setAttribute('data-state', '');
    } else {
        selectQuantity6.setAttribute('data-state', 'active');
    }
});

selectQuantity_labels6.forEach((item) => {
    item.addEventListener('click', (evt) => {
        selectQuantity_title6.textContent = evt.target.textContent;
        selectQuantity6.setAttribute('data-state', '');

        selectQuantity_labels6.forEach((i) => {
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

/*quantity7*/
const selectQuantity7 = document.querySelector('.quantity7');
const selectQuantity_title7 = selectQuantity7.querySelector('.quantity-title7');
const selectQuantity_labels7 = selectQuantity7.querySelectorAll('.quantity-label7');

selectQuantity_title7.addEventListener('click', () => {
    if ('active' === selectQuantity7.getAttribute('data-state')) {
        selectQuantity7.setAttribute('data-state', '');
    } else {
        selectQuantity7.setAttribute('data-state', 'active');
    }
});

selectQuantity_labels7.forEach((item) => {
    item.addEventListener('click', (evt) => {
        selectQuantity_title7.textContent = evt.target.textContent;
        selectQuantity7.setAttribute('data-state', '');

        selectQuantity_labels7.forEach((i) => {
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

/*quantity8*/
const selectQuantity8 = document.querySelector('.quantity8');
const selectQuantity_title8 = selectQuantity8.querySelector('.quantity-title8');
const selectQuantity_labels8 = selectQuantity8.querySelectorAll('.quantity-label8');

selectQuantity_title8.addEventListener('click', () => {
    if ('active' === selectQuantity8.getAttribute('data-state')) {
        selectQuantity8.setAttribute('data-state', '');
    } else {
        selectQuantity8.setAttribute('data-state', 'active');
    }
});

selectQuantity_labels8.forEach((item) => {
    item.addEventListener('click', (evt) => {
        selectQuantity_title8.textContent = evt.target.textContent;
        selectQuantity8.setAttribute('data-state', '');

        selectQuantity_labels8.forEach((i) => {
            i.classList.remove('label-checked');
        });

        evt.target.classList.add('label-checked')
    });
});