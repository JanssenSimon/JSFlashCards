var canvas = document.createElement('canvas'); //Create a canvas element
//Set canvas width/height
canvas.style.width='100%';
canvas.style.height='100%';
//Set canvas drawing area width/height
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//Position canvas
canvas.style.position='absolute';
canvas.style.left=0;
canvas.style.top=0;
canvas.style.zIndex=-1;
canvas.style.pointerEvents='none'; //Make sure you can click 'through' the canvas
document.body.appendChild(canvas); //Append canvas to body element
var context = canvas.getContext('2d');

//Position parameters used for drawing the rectangle
var x = window.innerWidth/2 - 317.5 - 20;
var y = window.innerHeight/2 - 185 - 36.5 - 20;
var width = 635 + 40;
var height = 370 + 40;
//Draw rectangle
context.rect(x, y, width, height);
context.fillStyle = '#FCF5C7';
context.fill();
