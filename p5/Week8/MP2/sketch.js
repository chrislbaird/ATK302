function setup() {
  createCanvas(1250, 1250);
  translate(250, 0);
  background(255);
  strokeWeight(4);
  stroke(0);
  fill(0);
  rect(0,0, 500, 500);
  fill(255);
  rect(500,0, 500, 500);
  fill(124);
  rect(0, 500, 1000, 250);

}

function draw() {


  him(100, 250);

  her(750, 250);





}



function storyText(inputText) {



    push();
    translate(250,0);
    fill(125);
    textSize(16);
    rect(0, 500, 1000, 250);

    text(inputText, 50, 550, 800, 500);

    pop();

}






function him(x, y) {

    push();
    translate(250,0);
    fill(255);
    circle(x, y, 100);
    pop();

}


function her(x, y) {


  push();
  translate(250,0);
  fill(0);
  circle(x, y, 100);
  pop();


}
