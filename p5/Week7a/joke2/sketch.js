var myState = 0
var secounds = 0;
var myVar;

function setup() {
  createCanvas(500, 500);
  myVar = window.setInterval(timerFunction, 5000);

}

function draw() {
  text(secounds, 10, 10);
  switch (myState) {

    case 0:
      background(128);
      text("What is the differance between an outlow and a inlaw?", 100, 100);

      break;

    case 1:
      background(128);

      text("A outlaw is wanted", 100, 100);

      break;



  }





}

function timerFunction() {
  myState = (myState + 1) % 2;

  console.log(myState);

  secounds = secounds + 1;

}