/*choiceForm1*/

const choiceForm1 = document.querySelector('.choiceForm1');
const totalPrice1 = document.querySelector('.total-price1');

choiceForm1.addEventListener('change', function(e) {
    if (document.getElementById('selectSize1').checked && document.getElementById('selectQuantity1').checked) {
        totalPrice1.textContent = '150 грн';
    }
    if (document.getElementById('selectSize1').checked && document.getElementById('selectQuantity2').checked) {
        totalPrice1.textContent = '250 грн';
    }
    if (document.getElementById('selectSize1').checked && document.getElementById('selectQuantity3').checked) {
        totalPrice1.textContent = '300 грн';
    }
    if (document.getElementById('selectSize1').checked && document.getElementById('selectQuantity4').checked) {
        totalPrice1.textContent = '450 грн';
    }
    if (document.getElementById('selectSize2').checked && document.getElementById('selectQuantity1').checked) {
        totalPrice1.textContent = '175 грн';
    }
    if (document.getElementById('selectSize2').checked && document.getElementById('selectQuantity2').checked) {
        totalPrice1.textContent = '275 грн';
    }
    if (document.getElementById('selectSize2').checked && document.getElementById('selectQuantity3').checked) {
        totalPrice1.textContent = '375 грн';
    }
    if (document.getElementById('selectSize2').checked && document.getElementById('selectQuantity4').checked) {
        totalPrice1.textContent = '550 грн';
    }
    if (document.getElementById('selectSize3').checked && document.getElementById('selectQuantity1').checked) {
        totalPrice1.textContent = '200 грн';
    }
    if (document.getElementById('selectSize3').checked && document.getElementById('selectQuantity2').checked) {
        totalPrice1.textContent = '300 грн';
    }
    if (document.getElementById('selectSize3').checked && document.getElementById('selectQuantity3').checked) {
        totalPrice1.textContent = '450 грн';
    }
    if (document.getElementById('selectSize3').checked && document.getElementById('selectQuantity4').checked) {
        totalPrice1.textContent = '750 грн';
    }
    if (document.getElementById('selectSize4').checked && document.getElementById('selectQuantity1').checked) {
        totalPrice1.textContent = '225 грн';
    }
    if (document.getElementById('selectSize4').checked && document.getElementById('selectQuantity2').checked) {
        totalPrice1.textContent = '375 грн';
    }
    if (document.getElementById('selectSize4').checked && document.getElementById('selectQuantity3').checked) {
        totalPrice1.textContent = '600 грн';
    }
    if (document.getElementById('selectSize4').checked && document.getElementById('selectQuantity4').checked) {
        totalPrice1.textContent = '1000 грн';
    }
    if (document.getElementById('selectSize5').checked && document.getElementById('selectQuantity1').checked) {
        totalPrice1.textContent = '275 грн';
    }
    if (document.getElementById('selectSize5').checked && document.getElementById('selectQuantity2').checked) {
        totalPrice1.textContent = '425 грн';
    }
    if (document.getElementById('selectSize5').checked && document.getElementById('selectQuantity3').checked) {
        totalPrice1.textContent = '750 грн';
    }
    if (document.getElementById('selectSize5').checked && document.getElementById('selectQuantity4').checked) {
        totalPrice1.textContent = '1350 грн';
    }
    if (document.getElementById('selectSize6').checked && document.getElementById('selectQuantity1').checked) {
        totalPrice1.textContent = '300 грн';
    }
    if (document.getElementById('selectSize6').checked && document.getElementById('selectQuantity2').checked) {
        totalPrice1.textContent = '450 грн';
    }
    if (document.getElementById('selectSize6').checked && document.getElementById('selectQuantity3').checked) {
        totalPrice1.textContent = '1125 грн';
    }
    if (document.getElementById('selectSize6').checked && document.getElementById('selectQuantity4').checked) {
        totalPrice1.textContent = '1875 грн';
    }
    if (document.getElementById('selectSize7').checked && document.getElementById('selectQuantity1').checked) {
        totalPrice1.textContent = '325 грн';
    }
    if (document.getElementById('selectSize7').checked && document.getElementById('selectQuantity2').checked) {
        totalPrice1.textContent = '475 грн';
    }
    if (document.getElementById('selectSize7').checked && document.getElementById('selectQuantity3').checked) {
        totalPrice1.textContent = '1300 грн';
    }
    if (document.getElementById('selectSize7').checked && document.getElementById('selectQuantity4').checked) {
        totalPrice1.textContent = '2250 грн';
    }
    if (document.getElementById('selectSize8').checked && document.getElementById('selectQuantity1').checked) {
        totalPrice1.textContent = '375 грн';
    }
    if (document.getElementById('selectSize8').checked && document.getElementById('selectQuantity2').checked) {
        totalPrice1.textContent = '525 грн';
    }
    if (document.getElementById('selectSize8').checked && document.getElementById('selectQuantity3').checked) {
        totalPrice1.textContent = '2100 грн';
    }
    if (document.getElementById('selectSize8').checked && document.getElementById('selectQuantity4').checked) {
        totalPrice1.textContent = '3600 грн';
    }
    if (document.getElementById('selectSize9').checked && document.getElementById('selectQuantity1').checked) {
        totalPrice1.textContent = '400 грн';
    }
    if (document.getElementById('selectSize9').checked && document.getElementById('selectQuantity2').checked) {
        totalPrice1.textContent = '550 грн';
    }
    if (document.getElementById('selectSize9').checked && document.getElementById('selectQuantity3').checked) {
        totalPrice1.textContent = '2750 грн';
    }
    if (document.getElementById('selectSize9').checked && document.getElementById('selectQuantity4').checked) {
        totalPrice1.textContent = '3750 грн';
    }
    if (document.getElementById('selectSize10').checked && document.getElementById('selectQuantity1').checked) {
        totalPrice1.textContent = '525 грн';
    }
    if (document.getElementById('selectSize10').checked && document.getElementById('selectQuantity2').checked) {
        totalPrice1.textContent = '675 грн';
    }
    if (document.getElementById('selectSize10').checked && document.getElementById('selectQuantity3').checked) {
        totalPrice1.textContent = '3400 грн';
    }
    if (document.getElementById('selectSize10').checked && document.getElementById('selectQuantity4').checked) {
        totalPrice1.textContent = '6250 грн';
    }
    if (document.getElementById('selectSize11').checked && document.getElementById('selectQuantity1').checked) {
        if (choiceForm1.classList.contains('choiceForm1-ua')) {
            totalPrice1.textContent = 'Ціну уточнюйте';
        } else {
            totalPrice1.textContent = 'Цену уточняйте';
        }
    }
    if (document.getElementById('selectSize11').checked && document.getElementById('selectQuantity2').checked) {
        if (choiceForm1.classList.contains('choiceForm1-ua')) {
            totalPrice1.textContent = 'Ціну уточнюйте';
        } else {
            totalPrice1.textContent = 'Цену уточняйте';
        }
    }
    if (document.getElementById('selectSize11').checked && document.getElementById('selectQuantity3').checked) {
        if (choiceForm1.classList.contains('choiceForm1-ua')) {
            totalPrice1.textContent = 'Ціну уточнюйте';
        } else {
            totalPrice1.textContent = 'Цену уточняйте';
        }
    }
    if (document.getElementById('selectSize11').checked && document.getElementById('selectQuantity4').checked) {
        if (choiceForm1.classList.contains('choiceForm1-ua')) {
            totalPrice1.textContent = 'Ціну уточнюйте';
        } else {
            totalPrice1.textContent = 'Цену уточняйте';
        }
    }
});

/*choiceForm2*/

const choiceForm2 = document.querySelector('.choiceForm2');
const totalPrice2 = document.querySelector('.total-price2');

choiceForm2.addEventListener('change', function(e) {
    if (document.getElementById('selectSize21').checked && document.getElementById('selectQuantity21').checked) {
        totalPrice2.textContent = '150 грн';
    }
    if (document.getElementById('selectSize21').checked && document.getElementById('selectQuantity22').checked) {
        totalPrice2.textContent = '250 грн';
    }
    if (document.getElementById('selectSize21').checked && document.getElementById('selectQuantity23').checked) {
        totalPrice2.textContent = '300 грн';
    }
    if (document.getElementById('selectSize21').checked && document.getElementById('selectQuantity24').checked) {
        totalPrice2.textContent = '450 грн';
    }
    if (document.getElementById('selectSize22').checked && document.getElementById('selectQuantity21').checked) {
        totalPrice2.textContent = '175 грн';
    }
    if (document.getElementById('selectSize22').checked && document.getElementById('selectQuantity22').checked) {
        totalPrice2.textContent = '275 грн';
    }
    if (document.getElementById('selectSize22').checked && document.getElementById('selectQuantity23').checked) {
        totalPrice2.textContent = '375 грн';
    }
    if (document.getElementById('selectSize22').checked && document.getElementById('selectQuantity24').checked) {
        totalPrice2.textContent = '550 грн';
    }
    if (document.getElementById('selectSize23').checked && document.getElementById('selectQuantity21').checked) {
        totalPrice2.textContent = '200 грн';
    }
    if (document.getElementById('selectSize23').checked && document.getElementById('selectQuantity22').checked) {
        totalPrice2.textContent = '300 грн';
    }
    if (document.getElementById('selectSize23').checked && document.getElementById('selectQuantity23').checked) {
        totalPrice2.textContent = '450 грн';
    }
    if (document.getElementById('selectSize23').checked && document.getElementById('selectQuantity24').checked) {
        totalPrice2.textContent = '750 грн';
    }
    if (document.getElementById('selectSize24').checked && document.getElementById('selectQuantity21').checked) {
        totalPrice2.textContent = '225 грн';
    }
    if (document.getElementById('selectSize24').checked && document.getElementById('selectQuantity22').checked) {
        totalPrice2.textContent = '375 грн';
    }
    if (document.getElementById('selectSize24').checked && document.getElementById('selectQuantity23').checked) {
        totalPrice2.textContent = '600 грн';
    }
    if (document.getElementById('selectSize24').checked && document.getElementById('selectQuantity24').checked) {
        totalPrice2.textContent = '1000 грн';
    }
    if (document.getElementById('selectSize25').checked && document.getElementById('selectQuantity21').checked) {
        totalPrice2.textContent = '275 грн';
    }
    if (document.getElementById('selectSize25').checked && document.getElementById('selectQuantity22').checked) {
        totalPrice2.textContent = '425 грн';
    }
    if (document.getElementById('selectSize25').checked && document.getElementById('selectQuantity23').checked) {
        totalPrice2.textContent = '750 грн';
    }
    if (document.getElementById('selectSize25').checked && document.getElementById('selectQuantity24').checked) {
        totalPrice2.textContent = '1350 грн';
    }
    if (document.getElementById('selectSize26').checked && document.getElementById('selectQuantity21').checked) {
        totalPrice2.textContent = '300 грн';
    }
    if (document.getElementById('selectSize26').checked && document.getElementById('selectQuantity22').checked) {
        totalPrice2.textContent = '450 грн';
    }
    if (document.getElementById('selectSize26').checked && document.getElementById('selectQuantity23').checked) {
        totalPrice2.textContent = '1125 грн';
    }
    if (document.getElementById('selectSize26').checked && document.getElementById('selectQuantity24').checked) {
        totalPrice2.textContent = '1875 грн';
    }
    if (document.getElementById('selectSize27').checked && document.getElementById('selectQuantity21').checked) {
        totalPrice2.textContent = '325 грн';
    }
    if (document.getElementById('selectSize27').checked && document.getElementById('selectQuantity22').checked) {
        totalPrice2.textContent = '475 грн';
    }
    if (document.getElementById('selectSize27').checked && document.getElementById('selectQuantity23').checked) {
        totalPrice2.textContent = '1300 грн';
    }
    if (document.getElementById('selectSize27').checked && document.getElementById('selectQuantity24').checked) {
        totalPrice2.textContent = '2250 грн';
    }
    if (document.getElementById('selectSize28').checked && document.getElementById('selectQuantity21').checked) {
        totalPrice2.textContent = '375 грн';
    }
    if (document.getElementById('selectSize28').checked && document.getElementById('selectQuantity22').checked) {
        totalPrice2.textContent = '525 грн';
    }
    if (document.getElementById('selectSize28').checked && document.getElementById('selectQuantity23').checked) {
        totalPrice2.textContent = '2100 грн';
    }
    if (document.getElementById('selectSize28').checked && document.getElementById('selectQuantity24').checked) {
        totalPrice2.textContent = '3600 грн';
    }
    if (document.getElementById('selectSize29').checked && document.getElementById('selectQuantity21').checked) {
        totalPrice2.textContent = '400 грн';
    }
    if (document.getElementById('selectSize29').checked && document.getElementById('selectQuantity22').checked) {
        totalPrice2.textContent = '550 грн';
    }
    if (document.getElementById('selectSize29').checked && document.getElementById('selectQuantity23').checked) {
        totalPrice2.textContent = '2750 грн';
    }
    if (document.getElementById('selectSize29').checked && document.getElementById('selectQuantity24').checked) {
        totalPrice2.textContent = '3750 грн';
    }
    if (document.getElementById('selectSize210').checked && document.getElementById('selectQuantity21').checked) {
        totalPrice2.textContent = '525 грн';
    }
    if (document.getElementById('selectSize210').checked && document.getElementById('selectQuantity22').checked) {
        totalPrice2.textContent = '675 грн';
    }
    if (document.getElementById('selectSize210').checked && document.getElementById('selectQuantity23').checked) {
        totalPrice2.textContent = '3400 грн';
    }
    if (document.getElementById('selectSize210').checked && document.getElementById('selectQuantity24').checked) {
        totalPrice2.textContent = '6250 грн';
    }
    if (document.getElementById('selectSize211').checked && document.getElementById('selectQuantity21').checked) {
        if (choiceForm1.classList.contains('choiceForm1-ua')) {
            totalPrice2.textContent = 'Ціну уточнюйте';
        } else {
            totalPrice2.textContent = 'Цену уточняйте';
        }
    }
    if (document.getElementById('selectSize211').checked && document.getElementById('selectQuantity22').checked) {
        if (choiceForm1.classList.contains('choiceForm1-ua')) {
            totalPrice2.textContent = 'Ціну уточнюйте';
        } else {
            totalPrice2.textContent = 'Цену уточняйте';
        }
    }
    if (document.getElementById('selectSize211').checked && document.getElementById('selectQuantity23').checked) {
        if (choiceForm1.classList.contains('choiceForm1-ua')) {
            totalPrice2.textContent = 'Ціну уточнюйте';
        } else {
            totalPrice1.textContent = 'Цену уточняйте';
        }
    }
    if (document.getElementById('selectSize211').checked && document.getElementById('selectQuantity24').checked) {
        if (choiceForm1.classList.contains('choiceForm1-ua')) {
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
        totalPrice3.textContent = '150 грн';
    }
    if (document.getElementById('selectSize31').checked && document.getElementById('selectQuantity32').checked) {
        totalPrice3.textContent = '250 грн';
    }
    if (document.getElementById('selectSize31').checked && document.getElementById('selectQuantity33').checked) {
        totalPrice3.textContent = '300 грн';
    }
    if (document.getElementById('selectSize31').checked && document.getElementById('selectQuantity34').checked) {
        totalPrice3.textContent = '450 грн';
    }
    if (document.getElementById('selectSize32').checked && document.getElementById('selectQuantity31').checked) {
        totalPrice3.textContent = '175 грн';
    }
    if (document.getElementById('selectSize32').checked && document.getElementById('selectQuantity32').checked) {
        totalPrice3.textContent = '275 грн';
    }
    if (document.getElementById('selectSize32').checked && document.getElementById('selectQuantity33').checked) {
        totalPrice3.textContent = '375 грн';
    }
    if (document.getElementById('selectSize32').checked && document.getElementById('selectQuantity34').checked) {
        totalPrice3.textContent = '550 грн';
    }
    if (document.getElementById('selectSize33').checked && document.getElementById('selectQuantity31').checked) {
        totalPrice3.textContent = '200 грн';
    }
    if (document.getElementById('selectSize33').checked && document.getElementById('selectQuantity32').checked) {
        totalPrice3.textContent = '300 грн';
    }
    if (document.getElementById('selectSize33').checked && document.getElementById('selectQuantity33').checked) {
        totalPrice3.textContent = '450 грн';
    }
    if (document.getElementById('selectSize33').checked && document.getElementById('selectQuantity34').checked) {
        totalPrice3.textContent = '750 грн';
    }
    if (document.getElementById('selectSize34').checked && document.getElementById('selectQuantity31').checked) {
        totalPrice3.textContent = '225 грн';
    }
    if (document.getElementById('selectSize34').checked && document.getElementById('selectQuantity32').checked) {
        totalPrice3.textContent = '375 грн';
    }
    if (document.getElementById('selectSize34').checked && document.getElementById('selectQuantity33').checked) {
        totalPrice3.textContent = '600 грн';
    }
    if (document.getElementById('selectSize34').checked && document.getElementById('selectQuantity34').checked) {
        totalPrice3.textContent = '1000 грн';
    }
    if (document.getElementById('selectSize35').checked && document.getElementById('selectQuantity31').checked) {
        totalPrice3.textContent = '275 грн';
    }
    if (document.getElementById('selectSize35').checked && document.getElementById('selectQuantity32').checked) {
        totalPrice3.textContent = '425 грн';
    }
    if (document.getElementById('selectSize35').checked && document.getElementById('selectQuantity33').checked) {
        totalPrice3.textContent = '750 грн';
    }
    if (document.getElementById('selectSize35').checked && document.getElementById('selectQuantity34').checked) {
        totalPrice3.textContent = '1350 грн';
    }
    if (document.getElementById('selectSize36').checked && document.getElementById('selectQuantity31').checked) {
        totalPrice3.textContent = '300 грн';
    }
    if (document.getElementById('selectSize36').checked && document.getElementById('selectQuantity32').checked) {
        totalPrice3.textContent = '450 грн';
    }
    if (document.getElementById('selectSize36').checked && document.getElementById('selectQuantity33').checked) {
        totalPrice3.textContent = '1125 грн';
    }
    if (document.getElementById('selectSize36').checked && document.getElementById('selectQuantity34').checked) {
        totalPrice3.textContent = '1875 грн';
    }
    if (document.getElementById('selectSize37').checked && document.getElementById('selectQuantity31').checked) {
        totalPrice3.textContent = '325 грн';
    }
    if (document.getElementById('selectSize37').checked && document.getElementById('selectQuantity32').checked) {
        totalPrice3.textContent = '475 грн';
    }
    if (document.getElementById('selectSize37').checked && document.getElementById('selectQuantity33').checked) {
        totalPrice3.textContent = '1300 грн';
    }
    if (document.getElementById('selectSize37').checked && document.getElementById('selectQuantity34').checked) {
        totalPrice3.textContent = '2250 грн';
    }
    if (document.getElementById('selectSize38').checked && document.getElementById('selectQuantity31').checked) {
        totalPrice3.textContent = '375 грн';
    }
    if (document.getElementById('selectSize38').checked && document.getElementById('selectQuantity32').checked) {
        totalPrice3.textContent = '525 грн';
    }
    if (document.getElementById('selectSize38').checked && document.getElementById('selectQuantity33').checked) {
        totalPrice3.textContent = '2100 грн';
    }
    if (document.getElementById('selectSize38').checked && document.getElementById('selectQuantity34').checked) {
        totalPrice3.textContent = '3600 грн';
    }
    if (document.getElementById('selectSize39').checked && document.getElementById('selectQuantity31').checked) {
        totalPrice3.textContent = '400 грн';
    }
    if (document.getElementById('selectSize39').checked && document.getElementById('selectQuantity32').checked) {
        totalPrice3.textContent = '550 грн';
    }
    if (document.getElementById('selectSize39').checked && document.getElementById('selectQuantity33').checked) {
        totalPrice3.textContent = '2750 грн';
    }
    if (document.getElementById('selectSize39').checked && document.getElementById('selectQuantity34').checked) {
        totalPrice3.textContent = '3750 грн';
    }
    if (document.getElementById('selectSize310').checked && document.getElementById('selectQuantity31').checked) {
        totalPrice3.textContent = '525 грн';
    }
    if (document.getElementById('selectSize310').checked && document.getElementById('selectQuantity32').checked) {
        totalPrice3.textContent = '675 грн';
    }
    if (document.getElementById('selectSize310').checked && document.getElementById('selectQuantity33').checked) {
        totalPrice3.textContent = '3400 грн';
    }
    if (document.getElementById('selectSize310').checked && document.getElementById('selectQuantity34').checked) {
        totalPrice3.textContent = '6250 грн';
    }
    if (document.getElementById('selectSize311').checked && document.getElementById('selectQuantity31').checked) {
        if (choiceForm1.classList.contains('choiceForm1-ua')) {
            totalPrice3.textContent = 'Ціну уточнюйте';
        } else {
            totalPrice3.textContent = 'Цену уточняйте';
        }
    }
    if (document.getElementById('selectSize311').checked && document.getElementById('selectQuantity32').checked) {
        if (choiceForm1.classList.contains('choiceForm1-ua')) {
            totalPrice3.textContent = 'Ціну уточнюйте';
        } else {
            totalPrice3.textContent = 'Цену уточняйте';
        }
    }
    if (document.getElementById('selectSize311').checked && document.getElementById('selectQuantity33').checked) {
        if (choiceForm1.classList.contains('choiceForm1-ua')) {
            totalPrice3.textContent = 'Ціну уточнюйте';
        } else {
            totalPrice3.textContent = 'Цену уточняйте';
        }
    }
    if (document.getElementById('selectSize311').checked && document.getElementById('selectQuantity34').checked) {
        if (choiceForm1.classList.contains('choiceForm1-ua')) {
            totalPrice3.textContent = 'Ціну уточнюйте';
        } else {
            totalPrice3.textContent = 'Цену уточняйте';
        }
    }
});

/*choiceForm4*/

const choiceForm4 = document.querySelector('.choiceForm4');
const totalPrice4 = document.querySelector('.total-price4');

choiceForm4.addEventListener('change', function(e) {
    if (document.getElementById('selectSize41').checked && document.getElementById('selectQuantity41').checked) {
        totalPrice4.textContent = '925 грн';
    }
    if (document.getElementById('selectSize41').checked && document.getElementById('selectQuantity42').checked) {
        totalPrice4.textContent = '1550 грн';
    }
    if (document.getElementById('selectSize41').checked && document.getElementById('selectQuantity43').checked) {
        totalPrice4.textContent = '6750 грн';
    }
    if (document.getElementById('selectSize41').checked && document.getElementById('selectQuantity44').checked) {
        totalPrice4.textContent = '11500 грн';
    }
    if (document.getElementById('selectSize42').checked && document.getElementById('selectQuantity41').checked) {
        totalPrice4.textContent = '1850 грн';
    }
    if (document.getElementById('selectSize42').checked && document.getElementById('selectQuantity42').checked) {
        totalPrice4.textContent = '3100 грн';
    }
    if (document.getElementById('selectSize42').checked && document.getElementById('selectQuantity43').checked) {
        totalPrice4.textContent = '13500 грн';
    }
    if (document.getElementById('selectSize42').checked && document.getElementById('selectQuantity44').checked) {
        totalPrice4.textContent = '23000 грн';
    }
    if (document.getElementById('selectSize43').checked && document.getElementById('selectQuantity41').checked) {
        totalPrice4.textContent = '3700 грн';
    }
    if (document.getElementById('selectSize43').checked && document.getElementById('selectQuantity42').checked) {
        totalPrice4.textContent = '6200 грн';
    }
    if (document.getElementById('selectSize43').checked && document.getElementById('selectQuantity43').checked) {
        totalPrice4.textContent = '27000 грн';
    }
    if (document.getElementById('selectSize43').checked && document.getElementById('selectQuantity44').checked) {
        totalPrice4.textContent = '46000 грн';
    }
});