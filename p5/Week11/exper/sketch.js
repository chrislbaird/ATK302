function setup() {
  createCanvas(1000, 1000);
  background("Black");
}

function draw() {
  for (let i = 30; i < width; i++) {
    for (let j = 20; j < height; j++) {
      let c = color(204 - j, 153 - i, 0);
      set(i, j, c % 255);
    }
  }
  updatePixels();
}