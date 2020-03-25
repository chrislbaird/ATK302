var testSquare;


function setup() {
  createCanvas(1000, 1000);
  testSquare = new squares(100, 100, "red", 1000, 1000, 100, 100, "Black");
  background("Black");
}

function draw() {
  testSquare.display();
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
    fill(this.backgroundColour);
    stroke(this.backgroundColour);
    rect(this.xLocation, this.yLocation,this.XSize,this.YSize)
    pop();
    push();
    fill(squareColour);
    stroke(squareColour);
    this.xLocation = (this.xLocation + 5) % this.xBounds;
    this.yLocation = (this.yLocation + 5) % this.yBounds;
    rect(this.xLocation + 1, this.yLocation,this.XSize,this.YSize)
    pop();




  }
}