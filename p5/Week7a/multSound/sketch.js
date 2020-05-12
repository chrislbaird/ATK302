// Starter audio code (“Sounds” from Week 4) put in sketch.js
var myState = 0
var song1;

function preload() {
  song1 = loadSound('assets/Zanarkand.mp3');
}

function setup() {

  createCanvas(720, 200);
  background(255, 0, 0);
  song1.play(); // this is what starts the sound

}

function draw() {

  switch (myState) {
    case 0:
      // code block
      break;
    case 1:
      // code block
      break;
    case 2:
      // code block
  }








}

function mouseReleased() {
  if (song1.isPlaying()) {
    song1.pause();
  } else {
    song1.play();
  }


}


function touchStarted() {
  getAudioContext().resume();
}