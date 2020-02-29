var lightsArray = ["Red", "Green", "Yellow"];
var myState = lightsArray[0];
var counterForArray = 0;
var timer = 10;

function setup() {
  createCanvas(800, 800);
  background(255);
  frameRate(1);
}

function draw() {
  textSize(16);
  background(255);

  timer--;
  text("myState:  " + myState + "  counterForArray = " + counterForArray + "  Timer: " + timer, 50, 50);

  if (timer == 0) {
    myState = lightsArray[counterForArray];
    timer = 10;
    counterForArray = (counterForArray + 1) % 3;
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
