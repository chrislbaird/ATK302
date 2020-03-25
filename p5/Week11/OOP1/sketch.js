var testSquare;

function setup() {
  createCanvas(1000, 1000);
  testSquare = new squares(100, 100, "red", 1000, 1000, 100, 100);
  background("Black");
}

function draw() {
  testSquare.display();
}



function squares(xLocation, yLocation, squareColour, yBounds, xBounds, XSize, YSize) {

  //attributes
  this.xLocation = xLocation;
  this.yLocation = yLocation;
  this.squareColour = squareColour;
  this.yBounds = yBounds;
  this.xBounds = xBounds;
  this.XSize = XSize;
  this.YSize = YSize;
  //methods
  this.display = function()
  {
    push();
    fill(squareColour);
    rect(this.xLocation, this.yLocation,this.XSize,this.YSize)
    pop();




  }
}