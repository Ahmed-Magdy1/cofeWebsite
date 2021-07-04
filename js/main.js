// event onclick for the icon links page when click on icon show the links
var iconLinks = document.getElementById('iconLinks');
var linksPage = document.getElementById('linksPage');
iconLinks.onclick = function () {
    'use strict';
    linksPage.classList.toggle('show-links');
}
// end event onclick for the icon links page when click on icon show the links

// start create a function to change background images of landing erery 2s 

var landingPage = document.getElementById('landingPage');

var imagesCover = ['cover2.jpg', 'cover3.jpg', 'cover4.jpg'];

setInterval(function () {
    var randomNum = Math.floor(Math.random() * imagesCover.length);

    landingPage.style.backgroundImage = 'url("./images/' + imagesCover[randomNum] + ' ")';
}, 3000);

// end create a function to change background images of landing erery 2s 

var navBarLinks = document.getElementById('navBarLinks');
var logo = document.getElementById('logo');



document.body.onload = function () {
    navBarLinks.classList.add('show-nav');
    logo.style.left = '0';
    
};

// start program for drinks section ...

var allDrinksCoffee = Array.from(document.querySelectorAll('.content-drks-section .drink'));

var drinkOne = document.getElementById('drinkOne');
allDrinksCoffee[0].onmouseover = function () {
    drinkOne.style.bottom = '0';
}
allDrinksCoffee[0].onmouseleave = function () {
    drinkOne.style.bottom = '-300px';
}

var drink2 = document.getElementById('drink2');
allDrinksCoffee[1].onmouseover = function () {
    drink2.style.bottom = '0';
}
allDrinksCoffee[1].onmouseleave = function () {
    drink2.style.bottom = '-300px';
}

var drink3 = document.getElementById('drink3');
allDrinksCoffee[2].onmouseover = function () {
    drink3.style.bottom = '0';
}
allDrinksCoffee[2].onmouseleave = function () {
    drink3.style.bottom = '-300px';
}

var drink4 = document.getElementById('drink4');
allDrinksCoffee[3].onmouseover = function () {
    drink4.style.bottom = '0';
}
allDrinksCoffee[3].onmouseleave = function () {
    drink4.style.bottom = '-300px';
}

var drink5 = document.getElementById('drink5');
allDrinksCoffee[4].onmouseover = function () {
    drink5.style.bottom = '0';
}
allDrinksCoffee[4].onmouseleave = function () {
    drink5.style.bottom = '-300px';
}

var drink6 = document.getElementById('drink6');
allDrinksCoffee[5].onmouseover = function () {
    drink6.style.bottom = '0';
}
allDrinksCoffee[5].onmouseleave = function () {
    drink6.style.bottom = '-300px';
}

var drink7 = document.getElementById('drink7');
allDrinksCoffee[6].onmouseover = function () {
    drink7.style.bottom = '0';
}
allDrinksCoffee[6].onmouseleave = function () {
    drink7.style.bottom = '-300px';
}

var drink8 = document.getElementById('drink8');
allDrinksCoffee[7].onmouseover = function () {
    drink8.style.bottom = '0';
}
allDrinksCoffee[7].onmouseleave = function () {
    drink8.style.bottom = '-300px';
}

var drink9 = document.getElementById('drink9');
allDrinksCoffee[8].onmouseover = function () {
    drink9.style.bottom = '0';
}
allDrinksCoffee[8].onmouseleave = function () {
    drink9.style.bottom = '-300px';
}

var drink10 = document.getElementById('drink10');
allDrinksCoffee[9].onmouseover = function () {
    drink10.style.bottom = '0';
}
allDrinksCoffee[9].onmouseleave = function () {
    drink10.style.bottom = '-300px';
}

var drink11 = document.getElementById('drink11');
allDrinksCoffee[10].onmouseover = function () {
    drink11.style.bottom = '0';
}
allDrinksCoffee[10].onmouseleave = function () {
    drink11.style.bottom = '-300px';
}

var drink12 = document.getElementById('drink12');
allDrinksCoffee[11].onmouseover = function () {
    drink12.style.bottom = '0';
}
allDrinksCoffee[11].onmouseleave = function () {
    drink12.style.bottom = '-300px';
}

var drink13 = document.getElementById('drink13');
allDrinksCoffee[12].onmouseover = function () {
    drink13.style.bottom = '0';
}
allDrinksCoffee[12].onmouseleave = function () {
    drink13.style.bottom = '-300px';
}

var drink14 = document.getElementById('drink14');
allDrinksCoffee[13].onmouseover = function () {
    drink14.style.bottom = '0';
}
allDrinksCoffee[13].onmouseleave = function () {
    drink14.style.bottom = '-300px';
}

var drink15 = document.getElementById('drink15');
allDrinksCoffee[14].onmouseover = function () {
    drink15.style.bottom = '0';
}
allDrinksCoffee[14].onmouseleave = function () {
    drink15.style.bottom = '-300px';
}

var drink16 = document.getElementById('drink16');
allDrinksCoffee[15].onmouseover = function () {
    drink16.style.bottom = '0';
}
allDrinksCoffee[15].onmouseleave = function () {
    drink16.style.bottom = '-300px';
}


// program on click for teckits orders .. 

var makeOrders = Array.from(document.querySelectorAll('.content-img span'));

// ticket order 1 ...
var orderTicket1 = document.getElementById('orderTicket1');
var btnTicket1 = document.getElementById('btnTicket1');

makeOrders[0].onclick = function () {
    orderTicket1.style.top = '0';
}
btnTicket1.onclick = function () {
    orderTicket1.style.top = '-300px';
    confirm('the request has been confirmed successfully');
}

// ticket order 2 ...
var orderTicket2 = document.getElementById('orderTicket2');
var btnTicket2 = document.getElementById('btnTicket2');

makeOrders[1].onclick = function () {
    orderTicket2.style.top = '0';
}
btnTicket2.onclick = function () {
    orderTicket2.style.top = '-300px';
    confirm('the request has been confirmed successfully');
}

// ticket order 3 ...
var orderTicket3 = document.getElementById('orderTicket3');
var btnTicket3 = document.getElementById('btnTicket3');

makeOrders[2].onclick = function () {
    orderTicket3.style.top = '0';
}
btnTicket3.onclick = function () {
    orderTicket3.style.top = '-300px';
    confirm('the request has been confirmed successfully');
}

// ticket order 4 ...
var orderTicket4 = document.getElementById('orderTicket4');
var btnTicket4 = document.getElementById('btnTicket4');

makeOrders[3].onclick = function () {
    orderTicket4.style.top = '0';
}
btnTicket4.onclick = function () {
    orderTicket4.style.top = '-300px';
    confirm('the request has been confirmed successfully');
}

// ticket order 5 ...
var orderTicket5 = document.getElementById('orderTicket5');
var btnTicket5 = document.getElementById('btnTicket5');

makeOrders[4].onclick = function () {
    orderTicket5.style.top = '0';
}
btnTicket5.onclick = function () {
    orderTicket5.style.top = '-300px';
    confirm('the request has been confirmed successfully');
}

// ticket order 6 ...
var orderTicket6 = document.getElementById('orderTicket6');
var btnTicket6 = document.getElementById('btnTicket6');

makeOrders[5].onclick = function () {
    orderTicket6.style.top = '0';
}
btnTicket6.onclick = function () {
    orderTicket6.style.top = '-300px';
    confirm('the request has been confirmed successfully');
}

// ticket order 7 ...
var orderTicket7 = document.getElementById('orderTicket7');
var btnTicket7 = document.getElementById('btnTicket7');

makeOrders[6].onclick = function () {
    orderTicket7.style.top = '0';
}
btnTicket7.onclick = function () {
    orderTicket7.style.top = '-300px';
    confirm('the request has been confirmed successfully');
}

// ticket order 8 ...
var orderTicket8 = document.getElementById('orderTicket8');
var btnTicket8 = document.getElementById('btnTicket8');

makeOrders[7].onclick = function () {
    orderTicket8.style.top = '0';
}
btnTicket8.onclick = function () {
    orderTicket8.style.top = '-300px';
    confirm('the request has been confirmed successfully');
}

// ticket order 9 ...
var orderTicket9 = document.getElementById('orderTicket9');
var btnTicket9 = document.getElementById('btnTicket9');

makeOrders[8].onclick = function () {
    orderTicket9.style.top = '0';
}
btnTicket9.onclick = function () {
    orderTicket9.style.top = '-300px';
    confirm('the request has been confirmed successfully');
}

// ticket order 10 ...
var orderTicket10 = document.getElementById('orderTicket10');
var btnTicket10 = document.getElementById('btnTicket10');

makeOrders[9].onclick = function () {
    orderTicket10.style.top = '0';
}
btnTicket10.onclick = function () {
    orderTicket10.style.top = '-300px';
    confirm('the request has been confirmed successfully');
}

// ticket order 11 ...
var orderTicket11 = document.getElementById('orderTicket11');
var btnTicket11 = document.getElementById('btnTicket11');

makeOrders[10].onclick = function () {
    orderTicket11.style.top = '0';
}
btnTicket11.onclick = function () {
    orderTicket11.style.top = '-300px';
    confirm('the request has been confirmed successfully');
}

// ticket order 12 ...
var orderTicket12 = document.getElementById('orderTicket12');
var btnTicket12 = document.getElementById('btnTicket12');

makeOrders[11].onclick = function () {
    orderTicket12.style.top = '0';
}
btnTicket12.onclick = function () {
    orderTicket12.style.top = '-300px';
    confirm('the request has been confirmed successfully');
}

// ticket order 13 ...
var orderTicket13 = document.getElementById('orderTicket13');
var btnTicket13 = document.getElementById('btnTicket13');

makeOrders[12].onclick = function () {
    orderTicket13.style.top = '0';
}
btnTicket13.onclick = function () {
    orderTicket13.style.top = '-300px';
    confirm('the request has been confirmed successfully');
}

// ticket order 14 ...
var orderTicket14 = document.getElementById('orderTicket14');
var btnTicket14 = document.getElementById('btnTicket14');

makeOrders[13].onclick = function () {
    orderTicket14.style.top = '0';
}
btnTicket14.onclick = function () {
    orderTicket14.style.top = '-300px';
    confirm('the request has been confirmed successfully');
}

// ticket order 15 ...
var orderTicket15 = document.getElementById('orderTicket15');
var btnTicket15 = document.getElementById('btnTicket15');

makeOrders[14].onclick = function () {
    orderTicket15.style.top = '0';
}
btnTicket15.onclick = function () {
    orderTicket15.style.top = '-300px';
    confirm('the request has been confirmed successfully');
}

// ticket order 16 ...
var orderTicket16 = document.getElementById('orderTicket16');
var btnTicket16 = document.getElementById('btnTicket16');

makeOrders[15].onclick = function () {
    orderTicket16.style.top = '0';
}
btnTicket16.onclick = function () {
    orderTicket16.style.top = '-300px';
    confirm('the request has been confirmed successfully');
}


