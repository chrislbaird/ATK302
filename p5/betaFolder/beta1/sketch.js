var img; // Declare variable 'img'.
var xValues = 0;
var yValues = 0;
function setup() {
  createCanvas(261, 302);
  img = loadImage('https://chrislbaird.github.io/ATK302/anime.png'); // Load the image

}

var value = 0;
function draw() {
  image(img, 0, 0);
  text(mouseX + "    " +  mouseY, 10, 10, 70, 80);
}
function mousePressed() {
  
}
