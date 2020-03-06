var hisStory = 0;
var herStory = 0;
var combineStoryTracker = -1;
var storyStateFlag = true;


var myVar;

function setup() {
  createCanvas(1250, 1250);
  textSize(32);
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
   storyText("His", true);
   him(300,100);
     break;
   case 2:
   storyText("His", true);
   him(400,100);
     break;
   case 4:
   storyText("His", true);
   him(500,100);
     break;
   case 6:
   storyText("His", true);
   him(600,100);
     break;
   case 8:
   storyText("His", true);
   him(700,100);
     break;
   case 10:
   storyText("His", true);
   him(700,200);
     break;
   case 12:
   storyText("His", true);
   him(700,300);
    break;
   case 14:
   storyText("His", true);
   him(700,400);
    break;
   case 16:
   storyText("His", true);
   him(700,450);
    break;
   case 1:
    storyText("Her", false);
     her(1150,100);
       break;
     case 3:
     storyText("Her", false);
     her(1050,100);
       break;
     case 5:
     storyText("Her", false);
     her(950,100);
       break;
     case 7:
     storyText("Her", false);
     her(850,100);
       break;
     case 9:
     storyText("Her", false);
     her(750,100);
       break;
     case 11:
     storyText("Her", false);
     her(750,200);
       break;
     case 13:
     storyText("Her", false);
     her(750,300);
      break;
     case 15:
     storyText("Her", false);
     her(750,400);
      break;
     case 17:
     storyText("Her", false);
     her(750,450);
       break;

    case 18:
    fill(124);
    rect(250, 500, 1000, 250);

    text("End", 300, 550, 800, 500);
    clearInterval(myVar);
    break;

 }






}



function storyText(inputText, storyFlag) {

  push();
  fill(124);
  textSize(16);
  rect(250, 500, 1000, 250);



  pop();

    push();

    if (storyFlag) {
    fill(0, 102, 153);
    } else {

    fill(255,192,203);
    }
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
 if (storyStateFlag) {
  myVar = setInterval(moveStory, 5000);
  storyStateFlag = false;
 }


}






function hisStoryFunction() {






}




function herStoryFunction() {




}


function moveStory() {
   console.log(combineStoryTracker);
   combineStoryTracker++;
}
