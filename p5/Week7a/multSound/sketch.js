// Starter audio code (“Sounds” from Week 4) put in sketch.js
var myState = 0
var song1;

function preload() {
  song1 = loadSound('assets/Zanarkand.mp3');
  song2 = loadSound('assets/chrono.mp3');
  song3 = loadSound('assets/senorita.mp3');
}



function setup() {

  createCanvas(720, 200);
  background(255);
  song1.play(); // this is what starts the sound

}

function draw() {

  switch (myState) {
    case 0:
      text("To Zanerkand From Final Fantasy 10", 100, 100);
      if (song1.isPlaying()) {

      } else {
        song1.play();
      }
      break;
    case 1:
      background(255);
      text("Song From Chrono Cross for the SNES", 100, 100);

      if (song1.isPlaying()) {
        song1.pause();
        song2.play();
      } else {

      }
      break;
      break;
    case 2:
      background(255);
      text("Song From Chrono Cross for the SNES", 100, 100);

      if (song2.isPlaying()) {
        song2.pause();
        song3.play();

      } else {

      }
      // code block
  }








}

function mouseReleased() {
  myState = (myState + 1) % 4;

  console.log(myState);
}


function touchStarted() {
  getAudioContext().resume();
}