function setup() {
  createCanvas(1000, 1000);
  background("Black");
}

function draw() {
  push()
  fill("red");
  rect(500, 500, 100, 100);
  pop();




  colorArray = get(600, 600);
  print("Print Color Red: " + colorArray[0]);
  print("Print Color Green: " + colorArray[1]);
  print("Print Color Blue: " + colorArray[2]);
}