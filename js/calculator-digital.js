/*choiceForm1*/

const choiceForm1 = document.querySelector('.choiceForm1');
const totalPrice1 = document.querySelector('.total-price1');

choiceForm1.addEventListener('change', function(e) {
    if (document.getElementById('selectSize1').checked && document.getElementById('selectQuantity1').checked) {
        totalPrice1.textContent = '150 грн';
    }
    if (document.getElementById('selectSize1').checked && document.getElementById('selectQuantity2').checked) {
        totalPrice1.textContent = '400 грн';
    }
    if (document.getElementById('selectSize1').checked && document.getElementById('selectQuantity3').checked) {
        totalPrice1.textContent = '700 грн';
    }
    if (document.getElementById('selectSize2').checked && document.getElementById('selectQuantity1').checked) {
        totalPrice1.textContent = '250 грн';
    }
    if (document.getElementById('selectSize2').checked && document.getElementById('selectQuantity2').checked) {
        totalPrice1.textContent = '700 грн';
    }
    if (document.getElementById('selectSize2').checked && document.getElementById('selectQuantity3').checked) {
        totalPrice1.textContent = '1000 грн';
    }
    if (document.getElementById('selectSize3').checked && document.getElementById('selectQuantity1').checked) {
        totalPrice1.textContent = '450 грн';
    }
    if (document.getElementById('selectSize3').checked && document.getElementById('selectQuantity2').checked) {
        totalPrice1.textContent = '2250 грн';
    }
    if (document.getElementById('selectSize3').checked && document.getElementById('selectQuantity3').checked) {
        totalPrice1.textContent = '4500 грн';
    }
    if (document.getElementById('selectSize4').checked && document.getElementById('selectQuantity1').checked) {
        totalPrice1.textContent = '650 грн';
    }
    if (document.getElementById('selectSize4').checked && document.getElementById('selectQuantity2').checked) {
        totalPrice1.textContent = '3250 грн';
    }
    if (document.getElementById('selectSize4').checked && document.getElementById('selectQuantity3').checked) {
        totalPrice1.textContent = '6500 грн';
    }
    if (document.getElementById('selectSize5').checked && document.getElementById('selectQuantity1').checked) {
        totalPrice1.textContent = '400 грн';
    }
    if (document.getElementById('selectSize5').checked && document.getElementById('selectQuantity2').checked) {
        totalPrice1.textContent = '2000 грн';
    }
    if (document.getElementById('selectSize5').checked && document.getElementById('selectQuantity3').checked) {
        totalPrice1.textContent = '4000 грн';
    }
    if (document.getElementById('selectSize6').checked && document.getElementById('selectQuantity1').checked) {
        totalPrice1.textContent = '600 грн';
    }
    if (document.getElementById('selectSize6').checked && document.getElementById('selectQuantity2').checked) {
        totalPrice1.textContent = '3000 грн';
    }
    if (document.getElementById('selectSize6').checked && document.getElementById('selectQuantity3').checked) {
        totalPrice1.textContent = '6000 грн';
    }
});

/*choiceForm2*/

const choiceForm2 = document.querySelector('.choiceForm2');
const totalPrice2 = document.querySelector('.total-price2');

choiceForm2.addEventListener('change', function(e) {
    if (document.getElementById('selectSize21').checked && document.getElementById('selectQuantity21').checked) {
        totalPrice2.textContent = '152 грн';
    }
    if (document.getElementById('selectSize21').checked && document.getElementById('selectQuantity22').checked) {
        totalPrice2.textContent = '245 грн';
    }
    if (document.getElementById('selectSize21').checked && document.getElementById('selectQuantity23').checked) {
        totalPrice2.textContent = '1040 грн';
    }
    if (document.getElementById('selectSize21').checked && document.getElementById('selectQuantity24').checked) {
        totalPrice2.textContent = '1810 грн';
    }
    if (document.getElementById('selectSize22').checked && document.getElementById('selectQuantity21').checked) {
        totalPrice2.textContent = '245 грн';
    }
    if (document.getElementById('selectSize22').checked && document.getElementById('selectQuantity22').checked) {
        totalPrice2.textContent = '470 грн';
    }
    if (document.getElementById('selectSize22').checked && document.getElementById('selectQuantity23').checked) {
        totalPrice2.textContent = '1810 грн';
    }
    if (document.getElementById('selectSize22').checked && document.getElementById('selectQuantity24').checked) {
        totalPrice2.textContent = '3100 грн';
    }
    if (document.getElementById('selectSize23').checked && document.getElementById('selectQuantity21').checked) {
        totalPrice2.textContent = '470 грн';
    }
    if (document.getElementById('selectSize23').checked && document.getElementById('selectQuantity22').checked) {
        totalPrice2.textContent = '820 грн';
    }
    if (document.getElementById('selectSize23').checked && document.getElementById('selectQuantity23').checked) {
        totalPrice2.textContent = '3100 грн';
    }
    if (document.getElementById('selectSize23').checked && document.getElementById('selectQuantity24').checked) {
        totalPrice2.textContent = '6200 грн';
    }
    if (document.getElementById('selectSize24').checked && document.getElementById('selectQuantity21').checked) {
        if (choiceForm2.classList.contains('choiceForm2-ua')) {
            totalPrice2.textContent = 'Ціну уточнюйте';
        } else {
            totalPrice2.textContent = 'Цену уточняйте';
        }
    }
    if (document.getElementById('selectSize24').checked && document.getElementById('selectQuantity22').checked) {
        if (choiceForm2.classList.contains('choiceForm2-ua')) {
            totalPrice2.textContent = 'Ціну уточнюйте';
        } else {
            totalPrice2.textContent = 'Цену уточняйте';
        }
    }
    if (document.getElementById('selectSize24').checked && document.getElementById('selectQuantity23').checked) {
        if (choiceForm2.classList.contains('choiceForm2-ua')) {
            totalPrice2.textContent = 'Ціну уточнюйте';
        } else {
            totalPrice2.textContent = 'Цену уточняйте';
        }
    }
    if (document.getElementById('selectSize24').checked && document.getElementById('selectQuantity24').checked) {
        if (choiceForm2.classList.contains('choiceForm2-ua')) {
            totalPrice2.textContent = 'Ціну уточнюйте';
        } else {
            totalPrice2.textContent = 'Цену уточняйте';
        }
    }
});

/*choiceForm3*/

const choiceForm3 = document.querySelector('.choiceForm3');
const totalPrice3 = document.querySelector('.total-price3');

choiceForm3.addEventListener('change', function(e) {
    if (document.getElementById('selectSize31').checked && document.getElementById('selectQuantity31').checked) {
        totalPrice3.textContent = '716 грн';
    }
    if (document.getElementById('selectSize31').checked && document.getElementById('selectQuantity32').checked) {
        totalPrice3.textContent = '1216 грн';
    }
    if (document.getElementById('selectSize31').checked && document.getElementById('selectQuantity33').checked) {
        totalPrice3.textContent = '3048 грн';
    }
    if (document.getElementById('selectSize31').checked && document.getElementById('selectQuantity34').checked) {
        totalPrice3.textContent = '5080 грн';
    }
    if (document.getElementById('selectSize31').checked && document.getElementById('selectQuantity35').checked) {
        totalPrice3.textContent = '10160 грн';
    }
    if (document.getElementById('selectSize32').checked && document.getElementById('selectQuantity31').checked) {
        if (choiceForm3.classList.contains('choiceForm3-ua')) {
            totalPrice3.textContent = 'Ціну уточнюйте';
        } else {
            totalPrice3.textContent = 'Цену уточняйте';
        }
    }
    if (document.getElementById('selectSize32').checked && document.getElementById('selectQuantity32').checked) {
        totalPrice3.textContent = 'Цену уточняйте';
    }
    if (document.getElementById('selectSize32').checked && document.getElementById('selectQuantity33').checked) {
        totalPrice3.textContent = 'Цену уточняйте';
    }
    if (document.getElementById('selectSize32').checked && document.getElementById('selectQuantity34').checked) {
        totalPrice3.textContent = 'Цену уточняйте';
    }
    if (document.getElementById('selectSize32').checked && document.getElementById('selectQuantity35').checked) {
        totalPrice3.textContent = 'Цену уточняйте';
    }
});

/*choiceForm4*/

const choiceForm4 = document.querySelector('.choiceForm4');
const totalPrice4 = document.querySelector('.total-price4');

choiceForm4.addEventListener('change', function(e) {
    if (document.getElementById('selectSize41').checked && document.getElementById('selectQuantity41').checked) {
        totalPrice4.textContent = '14 грн шт';
    }
    if (document.getElementById('selectSize41').checked && document.getElementById('selectQuantity42').checked) {
        totalPrice4.textContent = '12 грн шт';
    }
    if (document.getElementById('selectSize41').checked && document.getElementById('selectQuantity43').checked) {
        totalPrice4.textContent = '10 грн шт';
    }
    if (document.getElementById('selectSize41').checked && document.getElementById('selectQuantity44').checked) {
        totalPrice4.textContent = '9 грн шт';
    }
    if (document.getElementById('selectSize41').checked && document.getElementById('selectQuantity45').checked) {
        totalPrice4.textContent = '8 грн шт';
    }
    if (document.getElementById('selectSize41').checked && document.getElementById('selectQuantity46').checked) {
        totalPrice4.textContent = '7 грн шт';
    }
    if (document.getElementById('selectSize42').checked && document.getElementById('selectQuantity41').checked) {
        if (choiceForm4.classList.contains('choiceForm4-ua')) {
            totalPrice4.textContent = 'Ціну уточнюйте';
        } else {
            totalPrice4.textContent = 'Цену уточняйте';
        }
    }
    if (document.getElementById('selectSize42').checked && document.getElementById('selectQuantity42').checked) {
        totalPrice4.textContent = 'Цену уточняйте';
    }
    if (document.getElementById('selectSize42').checked && document.getElementById('selectQuantity43').checked) {
        totalPrice4.textContent = 'Цену уточняйте';
    }
    if (document.getElementById('selectSize42').checked && document.getElementById('selectQuantity44').checked) {
        totalPrice4.textContent = 'Цену уточняйте';
    }
    if (document.getElementById('selectSize42').checked && document.getElementById('selectQuantity45').checked) {
        totalPrice4.textContent = 'Цену уточняйте';
    }
    if (document.getElementById('selectSize42').checked && document.getElementById('selectQuantity46').checked) {
        totalPrice4.textContent = 'Цену уточняйте';
    }
});

/*choiceForm5*/

const choiceForm5 = document.querySelector('.choiceForm5');
const totalPrice5 = document.querySelector('.total-price5');

choiceForm5.addEventListener('change', function(e) {
    if (document.getElementById('selectSize51').checked && document.getElementById('selectQuantity51').checked) {
        totalPrice5.textContent = '203 грн';
    }
    if (document.getElementById('selectSize51').checked && document.getElementById('selectQuantity52').checked) {
        totalPrice5.textContent = '330 грн';
    }
    if (document.getElementById('selectSize51').checked && document.getElementById('selectQuantity53').checked) {
        totalPrice5.textContent = '1384 грн';
    }
    if (document.getElementById('selectSize51').checked && document.getElementById('selectQuantity54').checked) {
        totalPrice5.textContent = '2434 грн';
    }
    if (document.getElementById('selectSize52').checked && document.getElementById('selectQuantity51').checked) {
        totalPrice5.textContent = '330 грн';
    }
    if (document.getElementById('selectSize52').checked && document.getElementById('selectQuantity52').checked) {
        totalPrice5.textContent = '568 грн';
    }
    if (document.getElementById('selectSize52').checked && document.getElementById('selectQuantity53').checked) {
        totalPrice5.textContent = '2434 грн';
    }
    if (document.getElementById('selectSize52').checked && document.getElementById('selectQuantity54').checked) {
        totalPrice5.textContent = '3436 грн';
    }
    if (document.getElementById('selectSize53').checked && document.getElementById('selectQuantity51').checked) {
        if (choiceForm5.classList.contains('choiceForm5-ua')) {
            totalPrice5.textContent = 'Ціну уточнюйте';
        } else {
            totalPrice5.textContent = 'Цену уточняйте';
        }
    }
    if (document.getElementById('selectSize53').checked && document.getElementById('selectQuantity52').checked) {
        if (choiceForm5.classList.contains('choiceForm5-ua')) {
            totalPrice5.textContent = 'Ціну уточнюйте';
        } else {
            totalPrice5.textContent = 'Цену уточняйте';
        }
    }
    if (document.getElementById('selectSize53').checked && document.getElementById('selectQuantity53').checked) {
        if (choiceForm5.classList.contains('choiceForm5-ua')) {
            totalPrice5.textContent = 'Ціну уточнюйте';
        } else {
            totalPrice5.textContent = 'Цену уточняйте';
        }
    }
    if (document.getElementById('selectSize53').checked && document.getElementById('selectQuantity54').checked) {
        if (choiceForm5.classList.contains('choiceForm5-ua')) {
            totalPrice5.textContent = 'Ціну уточнюйте';
        } else {
            totalPrice5.textContent = 'Цену уточняйте';
        }
    }
});

/*choiceForm6*/

const choiceForm6 = document.querySelector('.choiceForm6');
const totalPrice6 = document.querySelector('.total-price6');

choiceForm6.addEventListener('change', function(e) {
    if (document.getElementById('selectSize61').checked && document.getElementById('selectQuantity61').checked) {
        totalPrice6.textContent = '8 грн';
    }
    if (document.getElementById('selectSize61').checked && document.getElementById('selectQuantity62').checked) {
        totalPrice6.textContent = '7 грн';
    }
    if (document.getElementById('selectSize61').checked && document.getElementById('selectQuantity63').checked) {
        totalPrice6.textContent = '6 грн';
    }
    if (document.getElementById('selectSize61').checked && document.getElementById('selectQuantity64').checked) {
        totalPrice6.textContent = '5 грн';
    }
    if (document.getElementById('selectSize61').checked && document.getElementById('selectQuantity65').checked) {
        totalPrice6.textContent = '4 грн';
    }
    if (document.getElementById('selectSize61').checked && document.getElementById('selectQuantity66').checked) {
        totalPrice6.textContent = '3 грн';
    }
    if (document.getElementById('selectSize62').checked && document.getElementById('selectQuantity61').checked) {
        totalPrice6.textContent = '18 грн';
    }
    if (document.getElementById('selectSize62').checked && document.getElementById('selectQuantity62').checked) {
        totalPrice6.textContent = '17 грн';
    }
    if (document.getElementById('selectSize62').checked && document.getElementById('selectQuantity63').checked) {
        totalPrice6.textContent = '16 грн';
    }
    if (document.getElementById('selectSize62').checked && document.getElementById('selectQuantity64').checked) {
        totalPrice6.textContent = '15 грн';
    }
    if (document.getElementById('selectSize62').checked && document.getElementById('selectQuantity65').checked) {
        totalPrice6.textContent = '14 грн';
    }
    if (document.getElementById('selectSize62').checked && document.getElementById('selectQuantity66').checked) {
        totalPrice6.textContent = '13 грн';
    }
    if (document.getElementById('selectSize63').checked && document.getElementById('selectQuantity61').checked) {
        if (choiceForm6.classList.contains('choiceForm6-ua')) {
            totalPrice6.textContent = 'Ціну уточнюйте';
        } else {
            totalPrice6.textContent = 'Цену уточняйте';
        }
    }
    if (document.getElementById('selectSize63').checked && document.getElementById('selectQuantity62').checked) {
        if (choiceForm6.classList.contains('choiceForm6-ua')) {
            totalPrice6.textContent = 'Ціну уточнюйте';
        } else {
            totalPrice6.textContent = 'Цену уточняйте';
        }
    }
    if (document.getElementById('selectSize63').checked && document.getElementById('selectQuantity63').checked) {
        if (choiceForm6.classList.contains('choiceForm6-ua')) {
            totalPrice6.textContent = 'Ціну уточнюйте';
        } else {
            totalPrice6.textContent = 'Цену уточняйте';
        }
    }
    if (document.getElementById('selectSize63').checked && document.getElementById('selectQuantity64').checked) {
        if (choiceForm6.classList.contains('choiceForm6-ua')) {
            totalPrice6.textContent = 'Ціну уточнюйте';
        } else {
            totalPrice6.textContent = 'Цену уточняйте';
        }
    }
    if (document.getElementById('selectSize63').checked && document.getElementById('selectQuantity65').checked) {
        if (choiceForm6.classList.contains('choiceForm6-ua')) {
            totalPrice6.textContent = 'Ціну уточнюйте';
        } else {
            totalPrice6.textContent = 'Цену уточняйте';
        }
    }
    if (document.getElementById('selectSize63').checked && document.getElementById('selectQuantity66').checked) {
        if (choiceForm6.classList.contains('choiceForm6-ua')) {
            totalPrice6.textContent = 'Ціну уточнюйте';
        } else {
            totalPrice6.textContent = 'Цену уточняйте';
        }
    }
});

/*choiceForm7*/

const choiceForm7 = document.querySelector('.choiceForm7');
const totalPrice7 = document.querySelector('.total-price7');

choiceForm7.addEventListener('change', function(e) {
    if (document.getElementById('selectSize71').checked && document.getElementById('selectQuantity71').checked) {
        totalPrice7.textContent = '78 грн';
    }
    if (document.getElementById('selectSize71').checked && document.getElementById('selectQuantity72').checked) {
        totalPrice7.textContent = '112 грн';
    }
    if (document.getElementById('selectSize71').checked && document.getElementById('selectQuantity73').checked) {
        totalPrice7.textContent = '170 грн';
    }
    if (document.getElementById('selectSize72').checked && document.getElementById('selectQuantity71').checked) {
        totalPrice7.textContent = '68 грн';
    }
    if (document.getElementById('selectSize72').checked && document.getElementById('selectQuantity72').checked) {
        totalPrice7.textContent = '98 грн';
    }
    if (document.getElementById('selectSize72').checked && document.getElementById('selectQuantity73').checked) {
        totalPrice7.textContent = '158 грн';
    }
    if (document.getElementById('selectSize73').checked && document.getElementById('selectQuantity71').checked) {
        totalPrice7.textContent = '62 грн';
    }
    if (document.getElementById('selectSize73').checked && document.getElementById('selectQuantity72').checked) {
        totalPrice7.textContent = '84 грн';
    }
    if (document.getElementById('selectSize73').checked && document.getElementById('selectQuantity73').checked) {
        totalPrice7.textContent = '144 грн';
    }
    if (document.getElementById('selectSize74').checked && document.getElementById('selectQuantity71').checked) {
        totalPrice7.textContent = '54 грн';
    }
    if (document.getElementById('selectSize74').checked && document.getElementById('selectQuantity72').checked) {
        totalPrice7.textContent = '84 грн';
    }
    if (document.getElementById('selectSize74').checked && document.getElementById('selectQuantity73').checked) {
        totalPrice7.textContent = '144 грн';
    }
    if (document.getElementById('selectSize75').checked && document.getElementById('selectQuantity71').checked) {
        if (choiceForm7.classList.contains('choiceForm7-ua')) {
            totalPrice7.textContent = 'Ціну уточнюйте';
        } else {
            totalPrice7.textContent = 'Цену уточняйте';
        }
    }
    if (document.getElementById('selectSize75').checked && document.getElementById('selectQuantity72').checked) {
        if (choiceForm7.classList.contains('choiceForm7-ua')) {
            totalPrice7.textContent = 'Ціну уточнюйте';
        } else {
            totalPrice7.textContent = 'Цену уточняйте';
        }
    }
    if (document.getElementById('selectSize75').checked && document.getElementById('selectQuantity73').checked) {
        if (choiceForm7.classList.contains('choiceForm7-ua')) {
            totalPrice7.textContent = 'Ціну уточнюйте';
        } else {
            totalPrice7.textContent = 'Цену уточняйте';
        }
    }
});

/*choiceForm8*/

const choiceForm8 = document.querySelector('.choiceForm8');
const totalPrice8 = document.querySelector('.total-price8');

choiceForm8.addEventListener('change', function(e) {
    if (document.getElementById('selectSize81').checked && document.getElementById('selectQuantity81').checked) {
        totalPrice8.textContent = '14 грн шт';
    }
    if (document.getElementById('selectSize81').checked && document.getElementById('selectQuantity82').checked) {
        totalPrice8.textContent = '12 грн шт';
    }
    if (document.getElementById('selectSize81').checked && document.getElementById('selectQuantity83').checked) {
        totalPrice8.textContent = '10 грн шт';
    }
    if (document.getElementById('selectSize81').checked && document.getElementById('selectQuantity84').checked) {
        totalPrice8.textContent = '9 грн шт';
    }
    if (document.getElementById('selectSize81').checked && document.getElementById('selectQuantity85').checked) {
        totalPrice8.textContent = '8 грн шт';
    }
    if (document.getElementById('selectSize81').checked && document.getElementById('selectQuantity86').checked) {
        totalPrice8.textContent = '7 грн шт';
    }
    if (document.getElementById('selectSize82').checked && document.getElementById('selectQuantity81').checked) {
        totalPrice8.textContent = '28 грн шт';
    }
    if (document.getElementById('selectSize82').checked && document.getElementById('selectQuantity82').checked) {
        totalPrice8.textContent = '24 грн шт';
    }
    if (document.getElementById('selectSize82').checked && document.getElementById('selectQuantity83').checked) {
        totalPrice8.textContent = '20 грн шт';
    }
    if (document.getElementById('selectSize82').checked && document.getElementById('selectQuantity84').checked) {
        totalPrice8.textContent = '18 грн шт';
    }
    if (document.getElementById('selectSize82').checked && document.getElementById('selectQuantity85').checked) {
        totalPrice8.textContent = '16 грн шт';
    }
    if (document.getElementById('selectSize82').checked && document.getElementById('selectQuantity86').checked) {
        totalPrice8.textContent = '14 грн шт';
    }
    if (document.getElementById('selectSize83').checked && document.getElementById('selectQuantity81').checked) {
        if (choiceForm8.classList.contains('choiceForm8-ua')) {
            totalPrice8.textContent = 'Ціну уточнюйте';
        } else {
            totalPrice8.textContent = 'Цену уточняйте';
        }
    }
    if (document.getElementById('selectSize83').checked && document.getElementById('selectQuantity82').checked) {
        if (choiceForm8.classList.contains('choiceForm8-ua')) {
            totalPrice8.textContent = 'Ціну уточнюйте';
        } else {
            totalPrice8.textContent = 'Цену уточняйте';
        }
    }
    if (document.getElementById('selectSize83').checked && document.getElementById('selectQuantity83').checked) {
        if (choiceForm8.classList.contains('choiceForm8-ua')) {
            totalPrice8.textContent = 'Ціну уточнюйте';
        } else {
            totalPrice8.textContent = 'Цену уточняйте';
        }
    }
    if (document.getElementById('selectSize83').checked && document.getElementById('selectQuantity84').checked) {
        if (choiceForm8.classList.contains('choiceForm8-ua')) {
            totalPrice8.textContent = 'Ціну уточнюйте';
        } else {
            totalPrice8.textContent = 'Цену уточняйте';
        }
    }
    if (document.getElementById('selectSize83').checked && document.getElementById('selectQuantity85').checked) {
        if (choiceForm8.classList.contains('choiceForm8-ua')) {
            totalPrice8.textContent = 'Ціну уточнюйте';
        } else {
            totalPrice8.textContent = 'Цену уточняйте';
        }
    }
    if (document.getElementById('selectSize83').checked && document.getElementById('selectQuantity86').checked) {
        if (choiceForm8.classList.contains('choiceForm8-ua')) {
            totalPrice8.textContent = 'Ціну уточнюйте';
        } else {
            totalPrice8.textContent = 'Цену уточняйте';
        }
    }
});