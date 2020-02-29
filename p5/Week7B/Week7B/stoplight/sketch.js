var lightsArray = ["Red", "Green", "Yellow"];
var myState = lightsArray[0];
var counterForArray = 0;
var timer = 10;
var lengthAndWidth = 800;

function setup() {
  createCanvas(lengthAndWidth, lengthAndWidth);
  background(255);
  frameRate(1);
}

function draw() {
  textSize(16);
  background(255);

  timer--;
  text("myState:  " + myState + "  counterForArray = " + counterForArray + "  Timer: " + timer, 50, 50);

  stopLightBackground();
  redLight();
  yellowLight();
  greenLight();





  if (timer == 0) {
    myState = lightsArray[counterForArray];
    timer = 10;
    counterForArray = (counterForArray + 1) % lightsArray.length;
  }



  switch(myState) {

    case lightsArray[0]:
    text(lightsArray[0], 100, 100);
       break ;

    case lightsArray[1]:

    text(lightsArray[1], 100, 100);
       break ;


    case lightsArray[2]:

    text(lightsArray[2], 100, 100);
    break ;
}



}


function  stopLightBackground() {
   push();
   fill(255, 204, 0);
   rect(100, 100, 100, 300);
   pop();


}

function  redLight() {
   push();

   pop();


}



function  yellowLight() {
   push();
   fill(231,180,22);
   pop();


}



function  greenLight() {
   push();
   fill(45,201,55);

   pop();


}
