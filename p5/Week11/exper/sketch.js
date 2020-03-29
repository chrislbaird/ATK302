function setup() {
  createCanvas(1000, 1000);
  background("Black");
}

function draw() {
  for (let i = 30; i < width - 15; i++) {
    for (let j = 20; j < height - 25; j++) {
      let c = color(204 - j, 153 - i, 0);
      set(i, j, c);
    }
  }
  updatePixels();
}