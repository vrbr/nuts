/*choiceForm1*/

const choiceForm1 = document.querySelector('.choiceForm1');
const totalPrice1 = document.querySelector('.total-price1');

choiceForm1.addEventListener('change', function(e) {
    if (document.getElementById('selectSize1').checked) {
        totalPrice1.textContent = '135 грн';
    }
    if (document.getElementById('selectSize2').checked) {
        totalPrice1.textContent = '270 грн';
    }
    if (document.getElementById('selectSize3').checked) {
        totalPrice1.textContent = '420 грн';
    }
    if (document.getElementById('selectSize4').checked) {
        totalPrice1.textContent = '560 грн';
    }
    if (document.getElementById('selectSize5').checked) {
        totalPrice1.textContent = '840 грн';
    }
    if (document.getElementById('selectSize6').checked) {
        totalPrice1.textContent = '1050 грн';
    }
    if (document.getElementById('selectSize7').checked) {
        totalPrice1.textContent = '840 грн';
    }
    if (document.getElementById('selectSize8').checked) {
        totalPrice1.textContent = '1260 грн';
    }
    if (document.getElementById('selectSize9').checked) {
        totalPrice1.textContent = '1400 грн';
    }
    if (document.getElementById('selectSize10').checked) {
        totalPrice1.textContent = '2100 грн';
    }
});

/*choiceForm2*/

const choiceForm2 = document.querySelector('.choiceForm2');
const totalPrice2 = document.querySelector('.total-price2');

choiceForm2.addEventListener('change', function(e) {
    if (document.getElementById('selectSize21').checked) {
        totalPrice2.textContent = '155 грн';
    }
    if (document.getElementById('selectSize22').checked) {
        totalPrice2.textContent = '310 грн';
    }
    if (document.getElementById('selectSize23').checked) {
        totalPrice2.textContent = '480 грн';
    }
    if (document.getElementById('selectSize24').checked) {
        totalPrice2.textContent = '640 грн';
    }
    if (document.getElementById('selectSize25').checked) {
        totalPrice2.textContent = '960 грн';
    }
    if (document.getElementById('selectSize26').checked) {
        totalPrice2.textContent = '1200 грн';
    }
    if (document.getElementById('selectSize27').checked) {
        totalPrice2.textContent = '960 грн';
    }
    if (document.getElementById('selectSize28').checked) {
        totalPrice2.textContent = '1440 грн';
    }
    if (document.getElementById('selectSize29').checked) {
        totalPrice2.textContent = '1600 грн';
    }
    if (document.getElementById('selectSize210').checked) {
        totalPrice2.textContent = '2400 грн';
    }
});

/*choiceForm3*/

const choiceForm3 = document.querySelector('.choiceForm3');
const totalPrice3 = document.querySelector('.total-price3');

choiceForm3.addEventListener('change', function(e) {
    if (document.getElementById('selectSize31').checked) {
        totalPrice3.textContent = '420 грн';
    }
    if (document.getElementById('selectSize32').checked) {
        totalPrice3.textContent = '620 грн';
    }
    if (document.getElementById('selectSize33').checked) {
        totalPrice3.textContent = '720 грн';
    }
    if (document.getElementById('selectSize34').checked) {
        totalPrice3.textContent = '820 грн';
    }
    if (document.getElementById('selectSize35').checked) {
        totalPrice3.textContent = '920 грн';
    }
});

/*choiceForm4*/

const choiceForm4 = document.querySelector('.choiceForm4');
const totalPrice4 = document.querySelector('.total-price4');

choiceForm4.addEventListener('change', function(e) {
    if (document.getElementById('selectSize41').checked && document.getElementById('selectQuantity41').checked) {
        totalPrice4.textContent = '140 грн';
    }
    if (document.getElementById('selectSize41').checked && document.getElementById('selectQuantity42').checked) {
        totalPrice4.textContent = '180 грн';
    }
    if (document.getElementById('selectSize42').checked && document.getElementById('selectQuantity41').checked) {
        totalPrice4.textContent = '280 грн';
    }
    if (document.getElementById('selectSize42').checked && document.getElementById('selectQuantity42').checked) {
        totalPrice4.textContent = '360 грн';
    }
});

/*choiceForm5*/

const choiceForm5 = document.querySelector('.choiceForm5');
const totalPrice5 = document.querySelector('.total-price5');

choiceForm5.addEventListener('change', function(e) {
    if (document.getElementById('selectSize51').checked) {
        totalPrice5.textContent = '70 грн';
    }
    if (document.getElementById('selectSize52').checked) {
        totalPrice5.textContent = '95 грн';
    }
    if (document.getElementById('selectSize53').checked) {
        totalPrice5.textContent = '190 грн';
    }
    if (document.getElementById('selectSize54').checked) {
        totalPrice5.textContent = '300 грн';
    }
    if (document.getElementById('selectSize55').checked) {
        totalPrice5.textContent = '400 грн';
    }
    if (document.getElementById('selectSize56').checked) {
        totalPrice5.textContent = '600 грн';
    }
    if (document.getElementById('selectSize57').checked) {
        totalPrice5.textContent = '750 грн';
    }
    if (document.getElementById('selectSize58').checked) {
        totalPrice5.textContent = '600 грн';
    }
    if (document.getElementById('selectSize59').checked) {
        totalPrice5.textContent = '900 грн';
    }
    if (document.getElementById('selectSize510').checked) {
        totalPrice5.textContent = '1000 грн';
    }
    if (document.getElementById('selectSize511').checked) {
        totalPrice5.textContent = '1500 грн';
    }
});

/*choiceForm6*/

const choiceForm6 = document.querySelector('.choiceForm6');
const totalPrice6 = document.querySelector('.total-price6');

choiceForm6.addEventListener('change', function(e) {
    if (document.getElementById('selectSize61').checked) {
        totalPrice6.textContent = '95 грн';
    }
    if (document.getElementById('selectSize62').checked) {
        totalPrice6.textContent = '190 грн';
    }
    if (document.getElementById('selectSize63').checked) {
        totalPrice6.textContent = '300 грн';
    }
    if (document.getElementById('selectSize64').checked) {
        totalPrice6.textContent = '400 грн';
    }
    if (document.getElementById('selectSize65').checked) {
        totalPrice6.textContent = '432 грн';
    }
    if (document.getElementById('selectSize66').checked) {
        totalPrice6.textContent = '600 грн';
    }
    if (document.getElementById('selectSize67').checked) {
        totalPrice6.textContent = '750 грн';
    }
    if (document.getElementById('selectSize68').checked) {
        totalPrice6.textContent = '600 грн';
    }
    if (document.getElementById('selectSize69').checked) {
        totalPrice6.textContent = '900 грн';
    }
    if (document.getElementById('selectSize610').checked) {
        totalPrice6.textContent = '1000 грн';
    }
    if (document.getElementById('selectSize611').checked) {
        totalPrice6.textContent = '1500 грн';
    }
});

/*choiceForm7*/

const choiceForm7 = document.querySelector('.choiceForm7');
const totalPrice7 = document.querySelector('.total-price7');

choiceForm7.addEventListener('change', function(e) {
    if (document.getElementById('selectSize71').checked) {
        totalPrice7.textContent = '70 грн';
    }
    if (document.getElementById('selectSize72').checked) {
        totalPrice7.textContent = '95 грн';
    }
    if (document.getElementById('selectSize73').checked) {
        totalPrice7.textContent = '190 грн';
    }
    if (document.getElementById('selectSize74').checked) {
        totalPrice7.textContent = '300 грн';
    }
    if (document.getElementById('selectSize75').checked) {
        totalPrice7.textContent = '400 грн';
    }
    if (document.getElementById('selectSize76').checked) {
        totalPrice7.textContent = '600 грн';
    }
    if (document.getElementById('selectSize77').checked) {
        totalPrice7.textContent = '750 грн';
    }
    if (document.getElementById('selectSize78').checked) {
        totalPrice7.textContent = '600 грн';
    }
    if (document.getElementById('selectSize79').checked) {
        totalPrice7.textContent = '900 грн';
    }
    if (document.getElementById('selectSize710').checked) {
        totalPrice7.textContent = '1000 грн';
    }
    if (document.getElementById('selectSize711').checked) {
        totalPrice7.textContent = '1500 грн';
    }
});

/*choiceForm8*/

const choiceForm8 = document.querySelector('.choiceForm8');
const totalPrice8 = document.querySelector('.total-price8');

choiceForm8.addEventListener('change', function(e) {
    if (document.getElementById('selectSize81').checked) {
        totalPrice8.textContent = '900 грн';
    }
    if (document.getElementById('selectSize82').checked) {
        totalPrice8.textContent = '1300 грн';
    }
    if (document.getElementById('selectSize83').checked) {
        totalPrice8.textContent = '750 грн';
    }
    if (document.getElementById('selectSize84').checked) {
        totalPrice8.textContent = '1050 грн';
    }
    if (document.getElementById('selectSize85').checked) {
        totalPrice8.textContent = '1500 грн';
    }
    if (document.getElementById('selectSize86').checked) {
        totalPrice8.textContent = '1900 грн';
    }
    if (document.getElementById('selectSize87').checked) {
        totalPrice8.textContent = '1875 грн';
    }
    if (document.getElementById('selectSize88').checked) {
        totalPrice8.textContent = '2275 грн';
    }
});