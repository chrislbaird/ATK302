function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(237, 34, 93);
  fill(0);

  if (mouseIsPressed) {
    ellipse(50, 50, 50, 50);
  } else {
    rect(25, 25, 50, 50)
  }

  print(mouseIsPressed);
}
