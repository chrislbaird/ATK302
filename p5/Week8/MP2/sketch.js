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
  rect(250, 0, 500, 500);
  fill(255);
  rect(750, 0, 500, 500);
  fill(124);
  rect(250, 500, 1000, 250);

  text("Please Click to Start Story.", 301, 550, 800, 500);

}

function draw() {


  switch (combineStoryTracker) {
    case 0:
      storyText("I was 25 years old just starting my first job after college. I had just moved to a new city and did not know anyone.", true);
      him(300, 100);
      break;
    case 1:
      storyText("I was 33 and starting a new point in my life.", false);
      her(1200, 100);
      break;
    case 2:
      storyText("I spent a lot of free time walking around the city just so I could see someone. I did not have the courage to interact with anyone.", true);
      him(400, 100);
      break;
    case 3:
      storyText("I had just finalized my divorce.  I had no desire to see or to talk to anyone.", false);
      her(1100, 100);
      break;
    case 4:
      storyText("My favorite place to walk was a park near my house.", true);
      him(500, 100);
      break;
    case 5:
      storyText("I spent most of my days off of work alone. I could not stop thinking about the friends, family and of the marriage that I lost. It was a normal day in the park when I saw her sitting on a bench. She was playing with something in her lap.", false);
      her(1000, 100);
      break;
    case 6:
      storyText("", true);
      him(600, 100);
      break;
    case 7:
      storyText("I would sit on the bench for hours just waiting for time  to pass so I could go home to my empty apartment.", false);
      her(900, 100);
      break;
    case 8:
      storyText("", true);
      him(700, 100);
      break;
    case 9:
      storyText("One day, while sitting on the bence I felt something brush against my leg.", false);
      her(800, 100);
      break;
    case 10:
      storyText("", true);
      him(700, 200);
      break;
    case 11:
      storyText("It was a tiny kitten trying to play with my shoestrings.", false);
      her(800, 200);
      break;
    case 12:
      storyText("She looked like she was in her own world nothing around her seemed to matter.", true);
      him(700, 300);
      break;
    case 13:
      storyText("I picked her up and placed her in my lap.", false);
      her(800, 300);
      break;
    case 14:
      storyText("In a blink of an eye the kitten made a dart towards the other end of the park ", true);
      him(700, 400);
      break;
    case 15:
      storyText("While playing with the kitten,  I noticed him again. I tried to make it seem that I was only focused on the kitten", false);
      her(800, 400);
      break;
    case 16:
      storyText("I picked up the kitten and before I knew it, she was standing right next to me.", true);
      him(700, 450);
      break;
    case 17:
      storyText("A car honking in the distance caused the kitten to get scared and run away. ", false);
      her(800, 450);
      break;
    case 18:
      fill(124);
      rect(250, 500, 1000, 250);
      text("End: Click to Start Again", 300, 550, 800, 500);
      combineStoryTracker = -1;
      clearInterval(myVar);
      storyStateFlag = true;
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

    fill(255, 192, 203);
  }
  text(inputText, 300, 550, 800, 500);
  pop();


}






function him(x, y) {

  push();
  fill(0);
  rect(250, 0, 500, 500);

  fill(255);
  circle(x, y, 100);
  pop();

}


function her(x, y) {


  push();
  fill(255);
  rect(750, 0, 500, 500);
  fill(0);
  circle(x, y, 100);
  pop();


}


function mousePressed() {
  if (storyStateFlag) {
    fill(124);
    rect(250, 500, 1000, 250);

    text("Stars crossing in the night", 300, 550, 800, 500);
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
