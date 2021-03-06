var testSquare;
var myArrayOfSquares = [1, 2, 3, 4, 5, 6, 7];


function setup() {
  createCanvas(1000, 1000);
  frameRate(1);
  myArrayOfSquares[0] = new squares(100, 100, "red", 950, 950, 50, 50, 0, -1);
  myArrayOfSquares[1] = new squares(800, 800, "green", 950, 950, 50, 50, 1, -1);
  myArrayOfSquares[2] = new squares(400, 400, "blue", 950, 950, 50, 50, 1, 0);
  myArrayOfSquares[3] = new squares(500, 200, "orange", 950, 950, 50, 50, 1, -1);
  myArrayOfSquares[4] = new squares(400, 900, "purple", 950, 950, 50, 50, 0, 11);
  myArrayOfSquares[5] = new squares(600, 300, "pink", 950, 950, 50, 50, -1, 0);
  myArrayOfSquares[6] = new squares(200, 900, "brown", 950, 950, 50, 50, -1, 1);
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

    if (this.xLocation > this.xBounds || this.xLocation < 0) {
      this.xDirection = this.xDirection * - 1;

    }

    if (this.yLocation > this.yBounds || this.yLocation < 0) {
      this.yDirection = this.yDirection * - 1;

    }

    print(Math.ceil(random(-1, 2)));

    if (dist(mouseX, mouseY, this.xLocation, this.yLocation) < 70) {
      this.yDirection = Math.ceil(random(-1, 2));
      this.xDirection = Math.ceil(random(-1, 2));
      print(this.squareColour);
    }



    push();
    fill(squareColour);
    stroke(squareColour);
    this.xLocation = (this.xLocation + this.xDirection);
    this.yLocation = (this.yLocation + this.yDirection);
    rect(this.xLocation + 1, this.yLocation, this.XSize, this.YSize)
    pop();




  }
}