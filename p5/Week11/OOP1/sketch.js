var testSquare;

function setup() {
  createCanvas(1000, 1000);
  testSquare = new squares(100, 100, "red", 1000, 1000, 100, 100, "Black");
  background("Black");
}

function draw() {
  testSquare.display();
  testSquare.xLocation = (testSquare.xLocation + 5) % testSquare.xBounds;
}



function squares(xLocation, yLocation, squareColour, yBounds, xBounds, XSize, YSize, backgroundColour) {

  //attributes
  this.xLocation = xLocation;
  this.yLocation = yLocation;
  this.squareColour = squareColour;
  this.yBounds = yBounds;
  this.xBounds = xBounds;
  this.XSize = XSize;
  this.YSize = YSize;
  this.backgroundColour = backgroundColour;
  //methods
  this.display = function()
  {
    push();
    fill(backgroundColour);
    rect(this.xLocation, this.yLocation,this.XSize,this.YSize)
    pop();
    fill(squareColour);
    rect(this.xLocation, this.yLocation,this.XSize,this.YSize)
    pop();




  }
}