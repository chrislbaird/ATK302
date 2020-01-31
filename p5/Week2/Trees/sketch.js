function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0, 0, 245);


  fill("#ffff00");
  ellipse(450, 50, 72, 72);

  fill(51, 204, 51);
  rect(0, 350, 500, 150);




  fill(204, 102, 0);
  quad(100, 350, 150, 350, 200, 500, 50, 500);





  text(mouseX + "    " +  mouseY, mouseX + 10, mouseY + 10, 70, 80);

 




  // charachter
  
    fill(255);
	stroke(62,157,231);
	strokeWeight(3);
	bezier(195,265,120,255,200,335,125,325);
	fill(62,157,231);
	rect(237,254,47,69);
	ellipse(261,210,80,87);
	triangle(612,179,624,253,640,193);
	fill(231,62,141);
	stroke(231,62,141);
	bezier(396,78,321,68,252,89,353,154);
	bezier(255,169,180,159,260,239,185,229);
	bezier(254,166,179,156,259,236,184,226);
	ellipse(249,208,28,31);
	bezier(470,205,395,195,475,275,400,265);
	ellipse(283,209,29,30);
	ellipse(598,89,28,12);
	rect(238,323,17,60);
	rect(270,322,14,60);
	bezier(207,75,196,4,276,84,201,74);
	triangle(257,258,237,299,280,300);



}
