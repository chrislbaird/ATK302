function setup() {
  createCanvas(100, 100);
  background("Black");
}

function draw() {
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      let c = color(204 - j, 153 - i, 0);
      set(i, j, color(255, 0, 0));

    }
  }
  updatePixels();
}