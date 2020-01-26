var img; // Declare variable 'img'.

function setup() {
  createCanvas(261, 302);
  img = loadImage('https://chrislbaird.github.io/ATK302/anime.png'); // Load the image
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  image(img, 0, 0);
  text(mouseX + "    " +  mouseY, 10, 10, 70, 80);

}
