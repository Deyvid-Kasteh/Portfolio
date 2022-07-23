var btn1 = document.querySelector('#bttn1');
var container312 = document.querySelector('.container312');

var btn2 = document.querySelector('#bttn2');
var container322 = document.querySelector('.container322');

var btn3 = document.querySelector('#bttn3');
var container332 = document.querySelector('.container332');







btn1.addEventListener('click', function() {
    if (container312.style.display === 'none') {
        container312.style.display = 'flex';
    } else {
        container312.style.display = 'none'
    }
});

btn2.addEventListener('click', function() {
    if (container322.style.display === 'none') {
        container322.style.display = 'flex';
    } else {
        container322.style.display = 'none'
    }
});

btn3.addEventListener('click', function() {
    if (container332.style.display === 'none') {
        container332.style.display = 'flex';
    } else {
        container332.style.display = 'none'
    }
});