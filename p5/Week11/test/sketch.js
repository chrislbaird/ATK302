var testSquare;
var myArrayOfSquares = [1, 2, 3, 4, 5, 6, 7, 8, 9];


function setup() {
  createCanvas(1000, 1000);
  frameRate(60);
  myArrayOfSquares[0] = new squares(100, 100, "red", 950, 950, 50, 50, 1, 1);
  myArrayOfSquares[1] = new squares(200, 100, "green", 950, 950, 50, 50, -1, 1);
  myArrayOfSquares[2] = new squares(300, 100, "blue", 950, 950, 50, 50, 1, -1);
  myArrayOfSquares[3] = new squares(100, 200, "orange", 950, 950, 50, 50, -1, -2);
  myArrayOfSquares[4] = new squares(200, 200, "purple", 950, 950, 50, 50, 2, -1);
  myArrayOfSquares[5] = new squares(300, 200, "pink", 950, 950, 50, 50, -1, -2);
  myArrayOfSquares[6] = new squares(100, 300, "brown", 950, 950, 50, 50, -2, 1);
  myArrayOfSquares[7] = new squares(200, 300, "aqua", 950, 950, 50, 50, -2, 1);
  myArrayOfSquares[7] = new squares(300, 300, "aqua", 950, 950, 50, 50, -2, 1);
  background("Black");
}

function draw() {
  background("black");
  for (var index = 0; index < myArrayOfSquares.length; index++) {
    myArrayOfSquares[index].display();

  }

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

  this.debuggerSquare = function name() {
    print(this.squareColour + "        output:   " + dist(mouseX, mouseY, this.xLocation, this.yLocation));
  }


  this.display = function () {

    // currently moving North
    if (this.xDirection == 0 && this.yDirection == -1) {

    }
    // currently moving North East
    if (this.xDirection == 1 && this.yDirection == -1) {

    }
    // currently moving East
    if (this.xDirection == 1 && this.yDirection == 0) {

    }
    // currently moving South East
    if (this.xDirection == 1 && this.yDirection == -1) {

    }
    // currently moving South
    if (this.xDirection == 0 && this.yDirection == 1) {

    }
    // currently moving South West
    if (this.xDirection == -1 && this.yDirection == 1) {

    }
    // currently moving West
    if (this.xDirection == -1 && this.yDirection == 0) {

    }

    // currently moving North West
    if (this.xDirection == -1 && this.yDirection == -1) {

    }

    push();
    fill(squareColour);
    stroke(squareColour);
    this.xLocation = (this.xLocation + this.xDirection);
    this.yLocation = (this.yLocation + this.yDirection);
    rect(this.xLocation , this.yLocation, this.XSize, this.YSize)
    pop();









  }
}