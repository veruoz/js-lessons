// работа с графикой
// DOM-элемент канваса
var canvas = document.getElementById('canvas');

// контент отрисовки
var ctx = canvas.getContext('2d');

ctx.fillStyle = 'blue';
ctx.fillRect(0, 0, 300, 150);

ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(80, 60);
ctx.stroke();