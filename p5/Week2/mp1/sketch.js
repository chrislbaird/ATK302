var img; // Declare variable 'img'.

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


  
  text(mouseX + "    " +  mouseY, 10, 10, 70, 80);





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
	translate(0, 300);
	scale(0.5);
	fill(197, 140, 133);
	rect(237,254,47,69);
	ellipse(261,210,80,87);
	
	fill(231,62,141);
	stroke(231,62,141);
	
	fill(255, 0, 0);
	bezier(255,169,180,159,260,239,185,229);
	bezier(254,166,179,156,259,236,184,226);
	
	
	fill(17, 214, 240);
	ellipse(249,208,28,31);
	ellipse(283,209,29,30);
	
	
	
	
	fill(235, 52, 222);
	
	rect(238,323,17,60);
	rect(270,322,14,60);
	
	
	
	
	triangle(257,258,237,299,285,300);


    pop();















































updatePixels();




}
