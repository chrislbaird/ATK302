var harrypotterimage;
var girlwithpearl;
var turkey;
var song1;
var myFont;


function preload() {
  song1 = loadSound('../sounds/assets/HarryPotterMusic.mp3');
}



function setup() {
    createCanvas(1080, 1920);

    harrypotterimage = loadImage("assets/harrypotter.jpg");
    girlwithpearl =  loadImage("assets/pearl.jpg");
    turkey = loadImage("assets/turkey.jpg");
    song1.play();  // this is what starts the sound
    myFont = loadFont('../fonts/assets/HarryPotter-ov4z.ttf');
    textFont(myFont, 32) ;
}

function draw() {
 image(harrypotterimage, 0, 0, 400, 400);
 image(girlwithpearl, 0, 400, 400, 400);
 image(turkey, 0, 800, 400, 400);


 text("Harry Potter Font", 500, 100);
}
