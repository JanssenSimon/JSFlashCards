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


//Store current state of cards
var isOnRecto = true;
var currentCardPosition = 0;

//Create an array of flashcards
//TODO if no array already exists in file
var flashCardStack = [{'recto' : "", 'verso' : ""}];
var flipCard = function () {
    isOnRecto = !isOnRecto;
}

var textbox = document.getElementById("textbox");

//Store textarea into array
var storeContents = function () {   //TODO maybe sanitize this?
    if (isOnRecto) {
        flashCardStack[currentCardPosition].recto = textbox.value;
        console.log("Recto value stored in array");
    }else{
        flashCardStack[currentCardPosition].verso = textbox.value;
        console.log("Verso value stored in array");
    }
}
//Get the contents stored in the array and display them
var getContents = function () {
    if (isOnRecto) {
        textbox.value = flashCardStack[currentCardPosition].recto;
        console.log("Recto value fetched from array");
    }else{
        textbox.value = flashCardStack[currentCardPosition].verso;
        console.log("Verso value fetched from array");
    }
}

//Create new flashcards
var newFlashCard() {
    flashCardStack.push({'recto' : "", 'verso' : ""});
    currentCardPosition = flashCardStack.length - 1;
    getContents();
}
//Delete flashcard
//TODO

textbox.onchange = storeContents()
