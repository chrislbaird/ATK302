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


    storyText("'Call me Ishmael. Some years ago--never mind how long precisely--having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.");
    console.log(paragraphBuilder("test"));





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
