var hisStory = 0;
var herStory = 0;


function setup() {
  createCanvas(1250, 1250);

  background(255);
  strokeWeight(4);
  stroke(0);
  fill(0);
  rect(250,0, 500, 500);
  fill(255);
  rect(750,0, 500, 500);
  fill(124);
  rect(250, 500, 1000, 250);

}

function draw() {


 console.log(hisStory);

  storyText(mouseX + "   " + mouseY);

}



function storyText(inputText) {



    push();

    fill(125);
    textSize(16);
    rect(250, 500, 1000, 250);

    text(inputText, 300, 550, 800, 500);

    pop();

}






function him(x, y) {

    push();
    fill(0);
    rect(250,0, 500, 500);

    fill(255);
    circle(x, y, 100);
    pop();

}


function her(x, y) {


  push();

  fill(0);
  circle(x, y, 100);
  pop();


}


function mousePressed() {

 if ((mouseX > 250 & mouseX < 750) & (mouseY > 0 & mouseY <500)) {
   hisStoryFunction();
} else if ((mouseX > 750 & mouseX < 1250) & (mouseY > 0 & mouseY <500)) {
   herStoryFunction();
 } else {
  console.log("log");
 }





}






function hisStoryFunction() {
  hisStory = hisStory % 9;
  switch (hisStory) {
   case 0:
   him(300,100);
     break;
   case 1:
   him(400,100);
     break;
   case 2:
   him(500,100);
     break;
   case 3:
   him(600,100);
     break;
   case 4:
   him(700,100);
     break;
   case 5:
   him(700,200);
     break;
   case 6:
   him(700,200);
    break;
   case 7:
   him(700,300);
    break;
   case 8:
   him(700,400);
     break;
   case 9:
   him(700,500);
       break;
 }
 hisStory++;



}




function herStoryFunction() {

  switch (herStory) {
  case 0:

    break;
  case 1:

    break;
  case 2:

    break;
  case 3:

    break;
  case 4:

    break;
  case 5:

    break;


}
herStory++;



}
