var lightsArray = ["Red", "Green", "Yellow"];
var myState = lightsArray[0];
var counterForArray = 0;
var timer = 0;
var lengthAndWidth = 800;

function setup() {
  createCanvas(lengthAndWidth, lengthAndWidth);
  background(255);
  frameRate(1);
  background(255);
  stopLightBackground();
  redLight(false);
  yellowLight(false);
  greenLight(false);
}

function draw() {
  textSize(16);

  background(255);
  stopLightBackground();
  timer--;
  text("myState:  " + myState + "  counterForArray = " + counterForArray + "  Timer: " + timer, 50, 50);







  if (timer < 0) {
    myState = lightsArray[counterForArray];
    timer = 10;
    counterForArray = (counterForArray + 1) % lightsArray.length;
  }



  switch(myState) {

    case lightsArray[0]:
    text(lightsArray[0], 100, 100);
    redLight(true);
    yellowLight(false);
    greenLight(false);



    break;

    case lightsArray[1]:
    text(lightsArray[2], 100, 100);
    redLight(false);
    yellowLight(false);
    greenLight(true);


    break;


    case lightsArray[2]:

    text(lightsArray[1], 100, 100);
    redLight(false);
    yellowLight(true);
    greenLight(false);

    break ;
}



}


function  stopLightBackground() {
   push();
  fill(255, 204, 0);
   rect(100, 100, 100, 300);
   pop();


}

function  redLight(flag) {
   push();
   if (flag) {
   fill(230, 0, 0);
   } else {
   fill(0);
   }
   ellipse(150,150,100,100);

   pop();


}



function  yellowLight(flag) {
   push();
   if (flag) {
   fill(231,180,22);
   } else {
   fill(0);
   }
   ellipse(150,250,100,100);
   pop();
}



function  greenLight(flag) {
   push();
   if (flag) {
   fill(76, 187, 23);
   } else {
   fill(0);
   }
   ellipse(150,350,100,100);
   pop();


}
