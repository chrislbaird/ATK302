var hisStory = 0;
var herStory = 0;
var combineStoryTracker = -1;

var myVar;

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

  text("Please Click to Start Story", 300, 550, 800, 500);

}

function draw() {


  switch (combineStoryTracker) {
   case 0:
   storyText();
   him(300,100);
     break;
   case 2:
   storyText();
   him(400,100);
     break;
   case 4:
   storyText();
   him(500,100);
     break;
   case 6:
   storyText();
   him(600,100);
     break;
   case 8:
   storyText();
   him(700,100);
     break;
   case 10:
   storyText();
   him(700,200);
     break;
   case 12:
   storyText();
   him(700,300);
    break;
   case 14:
   storyText();
   him(700,400);
    break;
   case 16:
   storyText();
   him(700,450);
    break;
   case 1:
    storyText();
     her(1200,100);
       break;
     case 3:
     storyText();
     her(1100,100);
       break;
     case 5:
     storyText();
     her(1000,100);
       break;
     case 7:
     storyText();
     her(900,100);
       break;
     case 9:
     storyText();
     her(800,100);
       break;
     case 11:
     storyText();
     her(800,200);
       break;
     case 13:
     storyText();
     her(800,300);
      break;
     case 15:
     storyText();
     her(800,400);
      break;
     case 17:
     storyText();
     her(800,450);
       break;

 }






}



function storyText(inputText, storyFlag) {



    push();
    if (flag) {
    fill(0, 102, 153);
    } else {
    fill(255,192,203);
    }

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
  fill(255);
  rect(750,0, 500, 500);
  fill(0);
  circle(x, y, 100);
  pop();


}


function mousePressed() {
 myVar = setInterval(moveStory, 5000);


}






function hisStoryFunction() {






}




function herStoryFunction() {




}


function moveStory() {
   console.log(combineStoryTracker);
   combineStoryTracker++;
}
