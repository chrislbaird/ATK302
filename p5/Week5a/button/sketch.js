var height = 500;
var width = 500;

var x = 0;
var y = 0;


function setup() {
  createCanvas(width, height);
}

function draw() {

 background(255, 0, 0);
 fill(9, 255,0);
 rect(x, y, 100, 100);


x++;

if (x > width) {
  x = 0;
}





}
