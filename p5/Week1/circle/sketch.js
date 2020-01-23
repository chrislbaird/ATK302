function setup() {
  // put setup code here
  createCanvas(500, 500);
}
var rvalue = 0;
var gvalue = 0;
var bvalue = 0;
function draw() {
  // put drawing code here


  background (rvalue%255,gvalue%255,bvalue%255);
  rvalue++;

  if (rvalue == 255) {
    gvalue++;
    rvalue = 0;
  }
}
