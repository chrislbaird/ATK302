var myState = 0;
var width = 800;


function setup() {

  createCanvas(800, 800);
  background(0, 0, 0);
}

function draw() {



switch(myState) {
  case 0:
  background(255, 0, 0);
  fill('white');
  textSize(100);
  text("case 0", 100, 100);
  break;
  case 1:
  background(0, 255, 0);
  fill('black');
  textSize(100);
  text("case 1", 100, 100);
    break;
  case 2:
  background(0, 0, 255);
  fill('Gold');
  textSize(100);
  text("case 2", 100, 100);
  break;

}




}
function mousePressed() {
  myState++;

  if (myState > 2) {
    myState = 0;
  }
}
