var img; // Declare variable 'img'.
var xValue = 0;
var yvalue = 0;


function setup() {
  createCanvas(261, 302);
  img = loadImage('https://chrislbaird.github.io/ATK302/anime.png'); // Load the image
}

function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}
function mousePressed() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}
