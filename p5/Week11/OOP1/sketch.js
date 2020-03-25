var testSquare;


function setup() {
  createCanvas(1000, 1000);
  testSquare = new squares(100, 100, "red", 1000, 1000, 50, 50, "Black");
  background("Black");
}

function draw() {
  background("black");
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
 
  //methods
  this.display = function()
  {
    
    
    push();
    fill(squareColour);
    stroke(squareColour);
    this.xLocation = (this.xLocation + random(5)) % this.xBounds;
    this.yLocation = (this.yLocation + random(5)) % this.yBounds;
    rect(this.xLocation + 1, this.yLocation,this.XSize,this.YSize)
    pop();




  }
}