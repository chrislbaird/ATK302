var harrypotterimage;
var girlwithpearl;
var turkey;


function setup() {
    createCanvas(1080, 1920);

    harrypotterimage = loadImage("assets/harrypotter.jpg");
    girlwithpearl =  loadImage("assets/pearl.jpg");
    turkey = loadImage("assets/turkey.jpg");

}

function draw() {
 image(harrypotterimage, 0, 0, 200, 200);
 image(girlwithpearl, 0, 200, 400, 400);
 image(turkey, 0, 500, 400, 400);
}
