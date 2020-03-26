var testSquare;
var myArrayOfSquares = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var booleanFlag = true;
var currentCanvas = 0;
var hiddenCanvas = 1;
var canvasArray = [1, 2];



function setup() {
  canvasArray[0] = createGraphics(1000, 1000);
  canvasArray[1] = createGraphics(1000, 1000);
  createCanvas(1000, 1000);
  background(255);
  frameRate(120);
  myArrayOfSquares[0] = new squares(100, 100, "red", 950, 950, 50, 50, -1, -1);
  myArrayOfSquares[1] = new squares(200, 100, "orange", 950, 950, 50, 50, 0, -1);
  myArrayOfSquares[2] = new squares(300, 100, "yellow", 950, 950, 50, 50, 1, -1);
  myArrayOfSquares[3] = new squares(100, 200, "lime", 950, 950, 50, 50, -1, 0);
  myArrayOfSquares[4] = new squares(200, 200, "green", 950, 950, 50, 50, 0, 0);
  myArrayOfSquares[5] = new squares(300, 200, "indigo", 950, 950, 50, 50, 1, 0);
  myArrayOfSquares[6] = new squares(100, 300, "purple", 950, 950, 50, 50, -1, 1);
  myArrayOfSquares[7] = new squares(200, 300, "grey", 950, 950, 50, 50, 0, 1);
  myArrayOfSquares[8] = new squares(300, 300, "white", 950, 950, 50, 50, 1, 1);
  canvasArray[0].background("black");
  canvasArray[1].background("red");
}

function draw() {

  print("X: " + myArrayOfSquares[8].xLocation);
  print("Y: " + myArrayOfSquares[8].yLocation);
  print("X  direction: " + myArrayOfSquares[8].xDirection);
  print("Y: direction: " + myArrayOfSquares[8].yDirection);



  for (var index = 0; index < myArrayOfSquares.length; index++) {
    myArrayOfSquares[index].display();

  }
  image(canvasArray[0], 0, 0);

  canvasArray[0].background(0);

}

function mousePressed() {
  print("Clicked");
  if (booleanFlag == true) {
    booleanFlag = false;
  } else {
    booleanFlag = true;
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

  this.moveSquare = function name() {
    push();
    canvasArray[0].fill(squareColour);
    canvasArray[0].stroke(squareColour);
    this.xLocation = (this.xLocation + this.xDirection);
    this.yLocation = (this.yLocation + this.yDirection);
    canvasArray[0].rect(this.xLocation, this.yLocation, this.XSize, this.YSize)
    pop();


  }

  this.debuggerSquare = function name() {
    print("Square Colour:  " + this.squareColour);


  }

  this.boundaryCheck = function name() {

    if (this.xLocation + this.xDirection > this.xBounds || this.xLocation + this.xDirection < 0) {
      this.xDirection = this.xDirection * - 1;

    }
    print("bondary check");
    if (this.yLocation + this.yDirection > this.yBounds || this.yLocation + this.yDirection < 0) {
      this.yDirection = this.yDirection * - 1;

    }

  }



  this.checkCorner = function name() {

    var tempX;
    var tempY;
    //northwest
    if (this.xDirection == -1 && this.yDirection == -1) {
      tempX = this.xLocation + this.xDirection;
      tempY = this.yLocation + this.yDirection;
    }
    // northeast
    else if (this.xDirection == 1 && this.yDirection == -1) {
      tempX = this.xLocation + this.xDirection + 50;
      tempY = this.yLocation + this.yDirection;
    }
    //Southwest
    else if (this.xDirection == -1 && this.yDirection == 1) {
      tempX = this.xLocation + this.xDirection;
      tempY = this.yLocation + this.yDirection + 50;
    }
    //southeast
    else if (this.xDirection == 1 && this.yDirection == 1) {
      tempX = this.xLocation + this.xDirection + 50;
      tempY = this.yLocation + this.yDirection + 50;
    }


    colorArray = get(tempX, tempY);




    if (colorArray[0] != 0 && colorArray[1] != 0 && colorArray[2] != 0) {
      this.xDirection = this.xDirection * -1;
      this.yDirection = this.yDirection * -1;
      print(this.squareColour + "Bounce!");
      print("Print Color Red: " + colorArray[0])
      print("Print Color Green: " + colorArray[1])
      print("Print Color Blue: " + colorArray[2])
      this.moveSquare();
    }

  }




  this.collisionCheck = function name() {
    // currently moving North West
    if (this.xDirection == -1 && this.yDirection == -1) {
      this.checkCorner();
    }
    // currently moving North 
    else if (this.xDirection == 0 && this.yDirection == -1) {

    }
    // currently moving North East
    else if (this.xDirection == 1 && this.yDirection == -1) {
      this.checkCorner();
    }
    // currently moving West
    else if (this.xDirection == -1 && this.yDirection == -0) {

    }
    // currently moving neutral
    else if (this.xDirection == 0 && this.yDirection == 0) {

    }
    // currently moving East
    else if (this.xDirection == 1 && this.yDirection == 0) {

    }
    // currently moving south West
    else if (this.xDirection == -1 && this.yDirection == 1) {
      this.checkCorner();
    }

    // currently moving South
    else if (this.xDirection == 0 && this.yDirection == 1) {

    }

    // currently moving South East
    else if (this.xDirection == 1 && this.yDirection == 1) {
      this.checkCorner();
    }
  }

  this.display = function () {
    this.boundaryCheck();

    // this.collisionCheck();

    //   var tester = get(mouseX, mouseY) == color("black");
    //   print("True false statement check:  " + tester);
    //   colorArray = get(mouseX, mouseY);
    //  print("Print Color Red: " + colorArray[0])
    //  print("Print Color Green: " + colorArray[1])
    //  print("Print Color Blue: " + colorArray[2])

    this.moveSquare();
















  }



}