var height = 500;
var width = 500;

var x = 0;
var y = 0;


function setup() {
  
  createCanvas(500, 500);
  background(255, 0, 0);
}

function draw() {


 fill(9, 255,0);
 rect(x, y, 100, 100);


x++;

if (x > width) {
  x = 0;
}





}
