var testSquare;


function setup() {
  createCanvas(1000, 1000);
  testSquare = new squares(100, 100, "red", 1000, 1000, 50, 50, 1, -1);
  testSquareBeta = new squares(800, 800, "green", 1000, 1000, 50, 50, 1, 1);
  testSquareAlpha = new squares(400, 400, "blue", 1000, 1000, 50, 50, -1, -1);
  background("Black");
}

function draw() {
  background("black");
  testSquare.display();
  testSquareAlpha.display();
  testSquareBeta.display();
}



function squares(xLocation, yLocation, squareColour, yBounds, xBounds, XSize, YSize, xDirection, yDirection) {

  //attributes
  this.xLocation = xLocation;
  this.yLocation = yLocation;
  this.squareColour = squareColour;
  this.yBounds = yBounds;
  this.xBounds = xBounds;
  this.XSize = XSize;
  this.YSize = YSize;
  this.xDirection = xDirection;
  this.yDirection = yDirection;
 
  //methods
  this.display = function()
  {
    
  if (this.xLocation + 50 > this.xBounds ||   this.xLocation  < 0) {
    this.xDirection = this.xDirection * -1;
  }

  if (this.yLocation + 50 > this.yBounds ||   this.yLocation  < 0) {
    this.yDirection = this.yDirection * -1;
  }

  if (this.xLocation + 50 > this.xBounds ||   this.xLocation < 0) {
    this.xDirection = this.xDirection * -1;
  }

  if (this.yLocation + 50 > this.yBounds ||   this.yLocation  < 0) {
    this.yDirection = this.yDirection * -1;
  }



    
    push();
    fill(squareColour);
    stroke(squareColour);
    this.xLocation = (this.xLocation + this.xDirection);
    this.yLocation = (this.yLocation + this.yDirection);
    rect(this.xLocation + 1, this.yLocation,this.XSize,this.YSize)
    pop();




  }
}