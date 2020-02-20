var mic;
var vol;
var y = 0 ;

function setup() {
  createCanvas(800, 800);

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background('white');
  fill(vol * 100);
  rect(100, 100, 10, 100);
  vol = mic.getLevel(); // level is between 0 and 1
  vol = vol * 100; // you may need to change this




  textSize(18);
  text("Click the screen first.  My volume is " + vol, 80, 400);


}


// you need to click the screen before the mic input will work.
function touchStarted() {
  getAudioContext().resume();
}
