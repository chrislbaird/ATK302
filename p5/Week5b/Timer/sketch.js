new p5();

var timer = 200;
var randomValue1 = random(256);
var randomValue2 = random(256);
var randomValue3 = random(256);
function setup() {
  createCanvas(500, 500);

  frameRate(1);
}

function draw() {
 background(randomValue1, randomValue2, randomValue3);
 textSize(25);
 text("Timer: "  + timer + " secounds: " , 100, 100);
 timer--;

 if (timer == 0) {
   timer = 60;
   randomValue1 = random(256);
   randomValue2 = random(256);
   randomValue3 = random(256);
   background(randomValue1, randomValue2, randomValue3);
 }


}
