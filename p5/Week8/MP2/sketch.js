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


    storyTextArea("'Call me Ishmael. Some years ago--never mind how long precisely--having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.");






}



function storyTextArea(inputText) {

    inputTextModded = paragraphBuilder();

    push();
    translate(250,0);
    fill(125);
    rect(0, 500, 1000, 250);

    text(inputTextModded, 50, 600);

    pop();

}


function paragraphBuilder(inputText) {


    return inputText;
}
