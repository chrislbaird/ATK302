var timer = 60;

function setup() {
  createCanvas(500, 500);

  frameRate(1);
}

function draw() {
 background(153);
 textSize(25);
 text("Timer: "  + timer + " secounds: " , 100, 100);
 timer--;

 if (timer == 0) {
   timer = 60;
   background(random(256), random(256), random(256));
 }


}
