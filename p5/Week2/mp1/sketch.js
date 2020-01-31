var img; // Declare variable 'img'.
var counter = 0;
function setup() {
  createCanvas(500, 500);

}

function draw() {
  // Displays the image at its actual size at point (0,0)

 background(0, 0, 245);


 fill("#ffff00");
  ellipse(450, 50, 72, 72);

  fill(51, 204, 51);
  rect(0, 350, 500, 150);




  fill(204, 102, 0);
  quad(100, 350, 150, 350, 200, 500, 50, 500);









  noStroke();
  fill(255);
  arc(300, 100, 50, 50, PI, TWO_PI);


  noStroke();
  fill(255);
  arc(325, 100, 50, 50, PI, TWO_PI);


  noStroke();
  fill(255);
  arc(350, 100, 50, 50, PI, TWO_PI);

  noStroke();
  fill(255);
  arc(375, 100, 50, 50, PI, TWO_PI);

// Cloud two

  noStroke();
  fill(255);
  arc(100, 150, 50, 25, PI, TWO_PI);


  noStroke();

  fill(255);
  arc(125, 150, 50, 50, PI, TWO_PI);


  noStroke();
  fill(255);
  arc(150, 150, 50, 75, PI, TWO_PI);


  // Cloud three

  noStroke();
  fill(255);
  arc(300, 200, 50, 25, PI, TWO_PI);


  noStroke();
  fill(255);
  arc(315, 200, 50, 50, PI, TWO_PI);


  noStroke();
  fill(255);
  arc(330, 200, 50, 31, PI, TWO_PI);


  // Tree 1
  fill(102, 51, 0);
  rect(350, 300, 35, 100, 20);

  fill(0, 255, 0);
  ellipse(340, 300, 50, 50);

  fill(0, 255, 0);
  ellipse(365, 300, 50, 50);

  fill(0, 255, 0);
  ellipse(390, 300, 50, 50);


  fill(0, 255, 0);
  ellipse(350, 275, 50, 50);

  fill(0, 255, 0);
  ellipse(325, 275, 50, 50);

  fill(0, 255, 0);
  ellipse(400, 275, 50, 50);


  fill(0, 255, 0);
  ellipse(365, 255, 50, 50);

  fill(0, 255, 0);
  ellipse(355, 255, 50, 50);

  fill(0, 255, 0);
  ellipse(375, 255, 50, 50);

  // Tree 2
  fill(102, 51, 0);
  rect(200, 250, 25, 125, 20);

  fill(0, 255, 0);
  ellipse(200, 240, 50, 50);

  fill(0, 255, 0);
  ellipse(215, 240, 50, 50);

  fill(0, 255, 0);
  ellipse(225, 240, 50, 50);


  fill(0, 255, 0);
  ellipse(175, 225, 50, 50);

  fill(0, 255, 0);
  ellipse(200, 225, 50, 50);

  fill(0, 255, 0);
  ellipse(245, 225, 50, 50);

  fill(0, 255, 0);
  ellipse(200, 200, 50, 50);

  fill(0, 255, 0);
  ellipse(225, 200, 50, 50);

  fill(0, 255, 0);
  ellipse(235, 200, 50, 50);





















  // bush 1

  fill(0, 255, 0);
  arc(350, 400, 50, 25, PI, TWO_PI);



  fill(0, 255, 0);
  arc(375, 400, 50, 50, PI, TWO_PI);



  fill(0, 255, 0);
  arc(400, 400, 50, 31, PI, TWO_PI);


  // bush 2

  fill(0, 255, 0);
  arc(200, 375, 50, 25, PI, TWO_PI);



  fill(0, 255, 0);
  arc(210, 376, 50, 50, PI, TWO_PI);



  fill(0, 255, 0);
  arc(220, 375, 50, 31, PI, TWO_PI);









  // test charachter

	push();
scale(0.5);
translate(30, 300);
stroke(197, 140, 133);
strokeWeight(2);
fill(197, 140, 133);

//Body start

ellipse(186,207,80,80);
rect(167,248,40,90);

bezier(214,248,269,371,204,288,200,249);
bezier(165,253,104,290,117,360,167,268);

//clothes
stroke(0);
strokeWeight(1);

fill(255,105,180);
triangle(189,247,165,305,207,305);
rect(169,359,16,60);
rect(167,334,40,25);
rect(190,357,14,60);

// other testing





fill(0);




fill(255);
ellipse(174,192,22,29);
ellipse(201,192,22,29);


fill(0,12,255);
ellipse(202,195,11,19);
ellipse(173,195,11,19);



// hair

fill(255,0,0);
bezier(167,174,92,164,172,244,97,234);
bezier(162,172,87,162,167,242,92,232);
bezier(165,171,90,161,170,241,95,231);


textSize(18);
fill(0);
if (mouseIsPressed) {
   text('Victoria is a new student at Illinois State University.  She recently joined her philosophy club.  \n There one of the students mentioned there was no way to know if they truly exist. This caused \n Victoria to go on a long walkto think about what he said', 0,-250);
  } else {
    text('Hold Mouse for story', 0,-250);

  }



}
