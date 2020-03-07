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
  rect(250, 500, 1000, 500);

  text("Please Click to Start Story.", 301, 550, 800, 500);

}

function draw() {


  switch (combineStoryTracker) {
    case 0:
      storyText("I was 25 years year when I finished my college degree.  I moved to a new city to start my first job.  I was excited to see the sights and sounds that I  have never seen before.  Time quickly passed in the new city.  I went out frequently and enjoyed meeting new people. I would go weeks of only being in my apartment to sleep and eat.   The time I was not working was spent partying or visiting friends.   ", true);
      him(300, 100);
      break;
    case 1:
      storyText("I was 33 years old when he ended our marriage.  I remember sitting on the courthouse bench with the freshly signed papers in my hand.   I had to take the day off from work to make it to the signing.  I did not know who I hated more than the man sitting across from me that I used to love or my lawyer.  Both of them had equal claim to what little money I had left.    Like it or not the next phase of my life had begun. ", false);
      her(1200, 100);
      break;
    case 2:
      storyText("I never forget the event that changed my life forever.   I was a party at a friend's house when we heard an explosion come from the basement of the house.     The house felt like it rose 10 feet from the ground and came down with a violent crash.  Everything around me was broken. People were lying on the ground covered with plaster or debris.  I had a broken arm from a fallen wooden beam.  We did not have time to think when we noticed a fire started to engulf what remained of the house. ", true);
      him(400, 100);
      break;
    case 3:
      storyText("I felt I was broken beyond repair.    I would spend hours wandering the city just to be alone.  I did not want to see the friends and family I lost in the divorce. They kept telling me everything was going to be the same and that I was welcome to come over anytime.  They did not see what I saw. The huge divide that grew every day that separated us.  ", false);
      her(1100, 100);
      break;
    case 4:
      storyText("I quickly got to my senses the best way I could.  I yelled at everyone to get out as fast as they could. Those who could make it to the exit quickly did so.  A few of the less injured helped the injured to exit.      I had no idea a fire could spread so fast. The smoke burned my lungs and made it hard to see. I tried to make my way to what I thought was the nearest exit when I heard someone screaming for help.", true);
      him(500, 100);
      break;
    case 5:
      storyText("I spent most of my time at a local park.  It was nice there to seat on the bench in front of the pond. My time there was spent reading books punctuated with small breaks of bird watching.  I would bring some bread and birdseed from time to time. The local birds quickly learned that I was a source of food. I became something of a tourist spot for local and migrating birds. ", false);
      her(1000, 100);
      break;
    case 6:
      storyText("I realized that it was one of the women from the party.  She had been pinned under some fallen debris that was on fire.  I tried my best to remove the debris with her help but my broken arm made progress almost impossible.   The heat and the smoke were too much I started to feel faint.  I could only hear her screams of pain.   The next thing I knew I woke up in a hospital bed.  The doctors told me that the women I tried to save died from injuries from the fire.  I was lucky to be found by a fireman coming to put out the fire.  Putting the broken arm aside,  I had only suffered minors burns.  The memories of the even traumatized me.  I took time off of work to get my head straight.  I did not want to be around anyone.   I spent my time walking around the city just to stay away from my home.  I would often go through the park to see the birds.   It was part of my routine.  ", true);
      him(600, 100);
      break;
    case 7:
      storyText("From time to time I would see him walking through the park.  He always looked like he was running late for something or looking for something he had lost.  He became part of my routine.    I would see him about once or twice a day.   Sometimes I would catch him looking at me.    ", false);
      her(900, 100);
      break;
    case 8:
      storyText("test", true);
      him(700, 100);
      break;
    case 9:
      storyText("test", false);
      her(800, 100);
      break;
    case 10:
      storyText("", true);
      him(700, 200);
      break;
    case 11:
      storyText("", false);
      her(800, 200);
      break;
    case 12:
      storyText("", true);
      him(700, 300);
      break;
    case 13:
      storyText("", false);
      her(800, 300);
      break;
    case 14:
      storyText("", true);
      him(700, 400);
      break;
    case 15:
      storyText("", false);
      her(800, 400);
      break;
    case 16:
      storyText("", true);
      him(700, 450);
      break;
    case 17:
      storyText(" ", false);
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
