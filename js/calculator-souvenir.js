/*choiceForm1*/

const choiceForm1 = document.querySelector('.choiceForm1');
const totalPrice1 = document.querySelector('.total-price1');

choiceForm1.addEventListener('change', function(e) {
    if (document.getElementById('selectSize1').checked && document.getElementById('selectQuantity1').checked) {
        totalPrice1.textContent = '250 грн шт';
    }
    if (document.getElementById('selectSize1').checked && document.getElementById('selectQuantity2').checked) {
        totalPrice1.textContent = '350 грн шт';
    }
    if (document.getElementById('selectSize2').checked && document.getElementById('selectQuantity1').checked) {
        totalPrice1.textContent = '230 грн шт';
    }
    if (document.getElementById('selectSize2').checked && document.getElementById('selectQuantity2').checked) {
        totalPrice1.textContent = '330 грн шт';
    }
    if (document.getElementById('selectSize3').checked && document.getElementById('selectQuantity1').checked) {
        totalPrice1.textContent = '210 грн шт';
    }
    if (document.getElementById('selectSize3').checked && document.getElementById('selectQuantity2').checked) {
        totalPrice1.textContent = '310 грн шт';
    }
    if (document.getElementById('selectSize4').checked && document.getElementById('selectQuantity1').checked) {
        totalPrice1.textContent = '190 грн шт';
    }
    if (document.getElementById('selectSize4').checked && document.getElementById('selectQuantity2').checked) {
        totalPrice1.textContent = '290 грн шт';
    }
    if (document.getElementById('selectSize5').checked && document.getElementById('selectQuantity1').checked) {
        totalPrice1.textContent = '170 грн шт';
    }
    if (document.getElementById('selectSize5').checked && document.getElementById('selectQuantity2').checked) {
        totalPrice1.textContent = '270 грн шт';
    }
});

/*choiceForm2*/

const choiceForm2 = document.querySelector('.choiceForm2');
const totalPrice2 = document.querySelector('.total-price2');

choiceForm2.addEventListener('change', function(e) {
    if (document.getElementById('selectSize21').checked && document.getElementById('selectQuantity21').checked) {
        totalPrice2.textContent = '480 грн шт';
    }
    if (document.getElementById('selectSize21').checked && document.getElementById('selectQuantity22').checked) {
        totalPrice2.textContent = '480 грн шт';
    }
    if (document.getElementById('selectSize21').checked && document.getElementById('selectQuantity23').checked) {
        totalPrice2.textContent = '480 грн шт';
    }
    if (document.getElementById('selectSize22').checked && document.getElementById('selectQuantity21').checked) {
        totalPrice2.textContent = '460 грн шт';
    }
    if (document.getElementById('selectSize22').checked && document.getElementById('selectQuantity22').checked) {
        totalPrice2.textContent = '460 грн шт';
    }
    if (document.getElementById('selectSize22').checked && document.getElementById('selectQuantity23').checked) {
        totalPrice2.textContent = '460 грн шт';
    }
    if (document.getElementById('selectSize23').checked && document.getElementById('selectQuantity21').checked) {
        totalPrice2.textContent = '440 грн шт';
    }
    if (document.getElementById('selectSize23').checked && document.getElementById('selectQuantity22').checked) {
        totalPrice2.textContent = '440 грн шт';
    }
    if (document.getElementById('selectSize23').checked && document.getElementById('selectQuantity23').checked) {
        totalPrice2.textContent = '440 грн шт';
    }
    if (document.getElementById('selectSize24').checked && document.getElementById('selectQuantity21').checked) {
        totalPrice2.textContent = '420 грн шт';
    }
    if (document.getElementById('selectSize24').checked && document.getElementById('selectQuantity22').checked) {
        totalPrice2.textContent = '420 грн шт';
    }
    if (document.getElementById('selectSize24').checked && document.getElementById('selectQuantity23').checked) {
        totalPrice2.textContent = '420 грн шт';
    }
    if (document.getElementById('selectSize25').checked && document.getElementById('selectQuantity21').checked) {
        totalPrice2.textContent = '400 грн шт';
    }
    if (document.getElementById('selectSize25').checked && document.getElementById('selectQuantity22').checked) {
        totalPrice2.textContent = '400 грн шт';
    }
    if (document.getElementById('selectSize25').checked && document.getElementById('selectQuantity23').checked) {
        totalPrice2.textContent = '400 грн шт';
    }
});

/*choiceForm3*/

const choiceForm3 = document.querySelector('.choiceForm3');
const totalPrice3 = document.querySelector('.total-price3');

choiceForm3.addEventListener('change', function(e) {
    if (document.getElementById('selectSize31').checked && document.getElementById('selectQuantity31').checked) {
        totalPrice3.textContent = '19 грн шт';
    }
    if (document.getElementById('selectSize31').checked && document.getElementById('selectQuantity32').checked) {
        totalPrice3.textContent = '21 грн шт';
    }
    if (document.getElementById('selectSize31').checked && document.getElementById('selectQuantity33').checked) {
        totalPrice3.textContent = '23 грн шт';
    }
    if (document.getElementById('selectSize32').checked && document.getElementById('selectQuantity31').checked) {
        totalPrice3.textContent = '18 грн шт';
    }
    if (document.getElementById('selectSize32').checked && document.getElementById('selectQuantity32').checked) {
        totalPrice3.textContent = '20 грн шт';
    }
    if (document.getElementById('selectSize32').checked && document.getElementById('selectQuantity33').checked) {
        totalPrice3.textContent = '22 грн шт';
    }
    if (document.getElementById('selectSize33').checked && document.getElementById('selectQuantity31').checked) {
        totalPrice3.textContent = '17 грн шт';
    }
    if (document.getElementById('selectSize33').checked && document.getElementById('selectQuantity32').checked) {
        totalPrice3.textContent = '19 грн шт';
    }
    if (document.getElementById('selectSize33').checked && document.getElementById('selectQuantity33').checked) {
        totalPrice3.textContent = '21 грн шт';
    }
    if (document.getElementById('selectSize34').checked && document.getElementById('selectQuantity31').checked) {
        totalPrice3.textContent = '16 грн шт';
    }
    if (document.getElementById('selectSize34').checked && document.getElementById('selectQuantity32').checked) {
        totalPrice3.textContent = '18 грн шт';
    }
    if (document.getElementById('selectSize34').checked && document.getElementById('selectQuantity33').checked) {
        totalPrice3.textContent = '20 грн шт';
    }
    if (document.getElementById('selectSize35').checked && document.getElementById('selectQuantity31').checked) {
        totalPrice3.textContent = '15 грн шт';
    }
    if (document.getElementById('selectSize35').checked && document.getElementById('selectQuantity32').checked) {
        totalPrice3.textContent = '17 грн шт';
    }
    if (document.getElementById('selectSize35').checked && document.getElementById('selectQuantity33').checked) {
        totalPrice3.textContent = '19 грн шт';
    }
});

/*choiceForm4*/

const choiceForm4 = document.querySelector('.choiceForm4');
const totalPrice4 = document.querySelector('.total-price4');

choiceForm4.addEventListener('change', function(e) {
    if (document.getElementById('selectSize41').checked && document.getElementById('selectQuantity41').checked) {
        totalPrice4.textContent = '450 грн шт';
    }
    if (document.getElementById('selectSize41').checked && document.getElementById('selectQuantity42').checked) {
        totalPrice4.textContent = '450 грн шт';
    }
    if (document.getElementById('selectSize42').checked && document.getElementById('selectQuantity41').checked) {
        totalPrice4.textContent = '430 грн шт';
    }
    if (document.getElementById('selectSize42').checked && document.getElementById('selectQuantity42').checked) {
        totalPrice4.textContent = '430 грн шт';
    }
    if (document.getElementById('selectSize43').checked && document.getElementById('selectQuantity41').checked) {
        totalPrice4.textContent = '410 грн шт';
    }
    if (document.getElementById('selectSize43').checked && document.getElementById('selectQuantity42').checked) {
        totalPrice4.textContent = '410 грн шт';
    }
    if (document.getElementById('selectSize44').checked && document.getElementById('selectQuantity41').checked) {
        totalPrice4.textContent = '390 грн шт';
    }
    if (document.getElementById('selectSize44').checked && document.getElementById('selectQuantity42').checked) {
        totalPrice4.textContent = '390 грн шт';
    }
    if (document.getElementById('selectSize45').checked && document.getElementById('selectQuantity41').checked) {
        totalPrice4.textContent = '370 грн шт';
    }
    if (document.getElementById('selectSize45').checked && document.getElementById('selectQuantity42').checked) {
        totalPrice4.textContent = '370 грн шт';
    }
});

/*choiceForm5*/

const choiceForm5 = document.querySelector('.choiceForm5');
const totalPrice5 = document.querySelector('.total-price5');

choiceForm5.addEventListener('change', function(e) {
    if (document.getElementById('selectSize51').checked) {
        totalPrice5.textContent = '150 грн шт';
    }
    if (document.getElementById('selectSize52').checked) {
        totalPrice5.textContent = '130 грн шт';
    }
    if (document.getElementById('selectSize53').checked) {
        totalPrice5.textContent = '110 грн шт';
    }
    if (document.getElementById('selectSize54').checked) {
        totalPrice5.textContent = '90 грн шт';
    }
    if (document.getElementById('selectSize55').checked) {
        totalPrice5.textContent = '70 грн шт';
    }
});

/*choiceForm6*/

const choiceForm6 = document.querySelector('.choiceForm6');
const totalPrice6 = document.querySelector('.total-price6');

choiceForm6.addEventListener('change', function(e) {
    if (document.getElementById('selectSize61').checked && document.getElementById('selectQuantity61').checked) {
        totalPrice6.textContent = '400 грн шт';
    }
    if (document.getElementById('selectSize61').checked && document.getElementById('selectQuantity62').checked) {
        totalPrice6.textContent = '400 грн шт';
    }
    if (document.getElementById('selectSize62').checked && document.getElementById('selectQuantity61').checked) {
        totalPrice6.textContent = '380 грн шт';
    }
    if (document.getElementById('selectSize62').checked && document.getElementById('selectQuantity62').checked) {
        totalPrice6.textContent = '380 грн шт';
    }
    if (document.getElementById('selectSize63').checked && document.getElementById('selectQuantity61').checked) {
        totalPrice6.textContent = '360 грн шт';
    }
    if (document.getElementById('selectSize63').checked && document.getElementById('selectQuantity62').checked) {
        totalPrice6.textContent = '360 грн шт';
    }
    if (document.getElementById('selectSize64').checked && document.getElementById('selectQuantity61').checked) {
        totalPrice6.textContent = '340 грн шт';
    }
    if (document.getElementById('selectSize64').checked && document.getElementById('selectQuantity62').checked) {
        totalPrice6.textContent = '340 грн шт';
    }
    if (document.getElementById('selectSize65').checked && document.getElementById('selectQuantity61').checked) {
        totalPrice6.textContent = '320 грн шт';
    }
    if (document.getElementById('selectSize65').checked && document.getElementById('selectQuantity62').checked) {
        totalPrice6.textContent = '320 грн шт';
    }
});

/*choiceForm7*/

const choiceForm7 = document.querySelector('.choiceForm7');
const totalPrice7 = document.querySelector('.total-price7');

choiceForm7.addEventListener('change', function(e) {
    if (document.getElementById('selectSize71').checked) {
        totalPrice7.textContent = '16 грн шт';
    }
    if (document.getElementById('selectSize72').checked) {
        totalPrice7.textContent = '14 грн шт';
    }
    if (document.getElementById('selectSize73').checked) {
        totalPrice7.textContent = '13 грн шт';
    }
    if (document.getElementById('selectSize74').checked) {
        totalPrice7.textContent = '11 грн шт';
    }
    if (document.getElementById('selectSize75').checked) {
        totalPrice7.textContent = '9 грн шт';
    }
});

/*choiceForm8*/

const choiceForm8 = document.querySelector('.choiceForm8');
const totalPrice8 = document.querySelector('.total-price8');

choiceForm8.addEventListener('change', function(e) {
    if (document.getElementById('selectSize81').checked && document.getElementById('selectQuantity81').checked) {
        totalPrice8.textContent = '400 грн шт';
    }
    if (document.getElementById('selectSize81').checked && document.getElementById('selectQuantity82').checked) {
        totalPrice8.textContent = '400 грн шт';
    }
    if (document.getElementById('selectSize82').checked && document.getElementById('selectQuantity81').checked) {
        totalPrice8.textContent = '380 грн шт';
    }
    if (document.getElementById('selectSize82').checked && document.getElementById('selectQuantity82').checked) {
        totalPrice8.textContent = '380 грн шт';
    }
    if (document.getElementById('selectSize83').checked && document.getElementById('selectQuantity81').checked) {
        totalPrice8.textContent = '360 грн шт';
    }
    if (document.getElementById('selectSize83').checked && document.getElementById('selectQuantity82').checked) {
        totalPrice8.textContent = '360 грн шт';
    }
    if (document.getElementById('selectSize84').checked && document.getElementById('selectQuantity81').checked) {
        totalPrice8.textContent = '340 грн шт';
    }
    if (document.getElementById('selectSize84').checked && document.getElementById('selectQuantity82').checked) {
        totalPrice8.textContent = '340 грн шт';
    }
    if (document.getElementById('selectSize85').checked && document.getElementById('selectQuantity81').checked) {
        totalPrice8.textContent = '320 грн шт';
    }
    if (document.getElementById('selectSize85').checked && document.getElementById('selectQuantity82').checked) {
        totalPrice8.textContent = '320 грн шт';
    }
});