// let przycisk = document.querySelector('button');

var p1 = document.querySelector('.first');
var p2 = document.querySelector('.second');


function setBackground() {
   p1.classList.add('red');
   p2.classList.add('yellow');
}

document.querySelector('button').addEventListener("click", setBackground);