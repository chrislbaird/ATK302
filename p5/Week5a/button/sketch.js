var height = 500;
var width = 500;




function setup() {
  createCanvas(500, 500);
}

function draw() {


 fill(9, 255,0);
 rect(100, 100, 100, 100);










}


function mousePressed() {

  if ((mouseX > 100 && mouseX < 200) && (mouseY > 100 && mouseY < 200)) {
    background(random(256), random(256), random(256));
  }


}
