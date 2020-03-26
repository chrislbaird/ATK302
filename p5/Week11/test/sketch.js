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
  frameRate(1);
  myArrayOfSquares[0] = new squares(100, 100, "red", 950, 950, 50, 50, -1, -1);
  myArrayOfSquares[1] = new squares(200, 100, "orange", 950, 950, 50, 50, 0, -1);
  myArrayOfSquares[2] = new squares(300, 100, "yellow", 950, 950, 50, 50, 1, -1);
  myArrayOfSquares[3] = new squares(100, 200, "lime", 950, 950, 50, 50, -1, 0);
  myArrayOfSquares[4] = new squares(200, 200, "green", 950, 950, 50, 50, 0, 1);
  myArrayOfSquares[5] = new squares(300, 200, "indigo", 950, 950, 50, 50, 1, 0);
  myArrayOfSquares[6] = new squares(100, 300, "purple", 950, 950, 50, 50, -1, 1);
  myArrayOfSquares[7] = new squares(200, 300, "grey", 950, 950, 50, 50, 0, 1);
  myArrayOfSquares[8] = new squares(300, 300, "white", 950, 950, 50, 50, 1, 1);

  myArrayOfSquares[9] = new squares(400, 100, "red", 950, 950, 50, 50, -1, -1);
  myArrayOfSquares[10] = new squares(500, 100, "orange", 950, 950, 50, 50, 0, -1);
  myArrayOfSquares[11] = new squares(600, 100, "yellow", 950, 950, 50, 50, 1, -1);
  myArrayOfSquares[12] = new squares(400, 200, "lime", 950, 950, 50, 50, -1, 0);
  myArrayOfSquares[13] = new squares(500, 200, "green", 950, 950, 50, 50, 1, 0);
  myArrayOfSquares[14] = new squares(600, 200, "indigo", 950, 950, 50, 50, 1, 0);
  myArrayOfSquares[15] = new squares(400, 300, "purple", 950, 950, 50, 50, -1, 1);
  myArrayOfSquares[16] = new squares(500, 300, "grey", 950, 950, 50, 50, 0, 1);
  myArrayOfSquares[17] = new squares(600, 300, "white", 950, 950, 50, 50, 1, 1);

  myArrayOfSquares[18] = new squares(700, 100, "red", 950, 950, 50, 50, -1, -1);
  myArrayOfSquares[19] = new squares(800, 100, "orange", 950, 950, 50, 50, 0, -1);
  myArrayOfSquares[20] = new squares(900, 100, "yellow", 950, 950, 50, 50, 1, -1);
  myArrayOfSquares[21] = new squares(700, 200, "lime", 950, 950, 50, 50, -1, 0);
  myArrayOfSquares[22] = new squares(800, 200, "green", 950, 950, 50, 50, 1, 0);
  myArrayOfSquares[23] = new squares(900, 200, "indigo", 950, 950, 50, 50, 1, 0);
  myArrayOfSquares[24] = new squares(700, 300, "purple", 950, 950, 50, 50, -1, 1);
  myArrayOfSquares[25] = new squares(800, 300, "grey", 950, 950, 50, 50, 0, 1);
  myArrayOfSquares[26] = new squares(900, 300, "white", 950, 950, 50, 50, 1, 1);

  myArrayOfSquares[27] = new squares(100, 400, "red", 950, 950, 50, 50, -1, -1);
  myArrayOfSquares[28] = new squares(200, 400, "orange", 950, 950, 50, 50, 0, -1);
  myArrayOfSquares[29] = new squares(300, 400, "yellow", 950, 950, 50, 50, 1, -1);
  myArrayOfSquares[30] = new squares(100, 500, "lime", 950, 950, 50, 50, -1, 0);
  myArrayOfSquares[31] = new squares(200, 500, "green", 950, 950, 50, 50, 0, 1);
  myArrayOfSquares[32] = new squares(300, 500, "indigo", 950, 950, 50, 50, 1, 0);
  myArrayOfSquares[33] = new squares(100, 600, "purple", 950, 950, 50, 50, -1, 1);
  myArrayOfSquares[34] = new squares(200, 600, "grey", 950, 950, 50, 50, 0, 1);
  myArrayOfSquares[35] = new squares(300, 600, "white", 950, 950, 50, 50, 1, 1);


  myArrayOfSquares[36] = new squares(400, 400, "red", 950, 950, 50, 50, -1, -1);
  myArrayOfSquares[37] = new squares(500, 400, "orange", 950, 950, 50, 50, 0, -1);
  myArrayOfSquares[38] = new squares(600, 400, "yellow", 950, 950, 50, 50, 1, -1);
  myArrayOfSquares[39] = new squares(400, 500, "lime", 950, 950, 50, 50, -1, 0);
  myArrayOfSquares[40] = new squares(500, 500, "green", 950, 950, 50, 50, -1, -1);
  myArrayOfSquares[41] = new squares(600, 500, "indigo", 950, 950, 50, 50, 1, 0);
  myArrayOfSquares[42] = new squares(400, 600, "purple", 950, 950, 50, 50, -1, 1);
  myArrayOfSquares[43] = new squares(500, 600, "grey", 950, 950, 50, 50, 0, 1);
  myArrayOfSquares[44] = new squares(600, 600, "white", 950, 950, 50, 50, 1, 1);


  myArrayOfSquares[45] = new squares(700, 400, "red", 950, 950, 50, 50, -1, -1);
  myArrayOfSquares[46] = new squares(800, 400, "orange", 950, 950, 50, 50, 0, -1);
  myArrayOfSquares[47] = new squares(900, 400, "yellow", 950, 950, 50, 50, 1, -1);
  myArrayOfSquares[48] = new squares(700, 500, "lime", 950, 950, 50, 50, -1, 0);
  myArrayOfSquares[49] = new squares(800, 500, "green", 950, 950, 50, 50, 1, 0);
  myArrayOfSquares[50] = new squares(900, 500, "indigo", 950, 950, 50, 50, 1, 0);
  myArrayOfSquares[51] = new squares(700, 600, "purple", 950, 950, 50, 50, -1, 1);
  myArrayOfSquares[52] = new squares(800, 600, "grey", 950, 950, 50, 50, 0, 1);
  myArrayOfSquares[53] = new squares(900, 600, "white", 950, 950, 50, 50, 1, 1);


  myArrayOfSquares[54] = new squares(100, 700, "red", 950, 950, 50, 50, -1, -1);
  myArrayOfSquares[55] = new squares(200, 700, "orange", 950, 950, 50, 50, 0, -1);
  myArrayOfSquares[56] = new squares(300, 700, "yellow", 950, 950, 50, 50, 1, -1);
  myArrayOfSquares[57] = new squares(100, 800, "lime", 950, 950, 50, 50, -1, 0);
  myArrayOfSquares[58] = new squares(200, 800, "green", 950, 950, 50, 50, 3, 0);
  myArrayOfSquares[59] = new squares(300, 800, "indigo", 950, 950, 50, 50, 1, 0);
  myArrayOfSquares[60] = new squares(100, 900, "purple", 950, 950, 50, 50, -1, 1);
  myArrayOfSquares[61] = new squares(200, 900, "grey", 950, 950, 50, 50, 0, 1);
  myArrayOfSquares[62] = new squares(300, 900, "white", 950, 950, 50, 50, 1, 1);

  myArrayOfSquares[63] = new squares(400, 700, "red", 950, 950, 50, 50, -1, -1);
  myArrayOfSquares[64] = new squares(500, 700, "orange", 950, 950, 50, 50, 0, -1);
  myArrayOfSquares[65] = new squares(600, 700, "yellow", 950, 950, 50, 50, 1, -1);
  myArrayOfSquares[66] = new squares(400, 800, "lime", 950, 950, 50, 50, -1, 0);
  myArrayOfSquares[67] = new squares(500, 800, "green", 950, 950, 50, 50, -1, 0);
  myArrayOfSquares[68] = new squares(600, 800, "indigo", 950, 950, 50, 50, 1, 0);
  myArrayOfSquares[69] = new squares(400, 900, "purple", 950, 950, 50, 50, -1, 1);
  myArrayOfSquares[70] = new squares(500, 900, "grey", 950, 950, 50, 50, 0, 1);
  myArrayOfSquares[71] = new squares(600, 900, "white", 950, 950, 50, 50, 1, 1);



  myArrayOfSquares[72] = new squares(700, 700, "red", 950, 950, 50, 50, -1, -1);
  myArrayOfSquares[73] = new squares(800, 700, "orange", 950, 950, 50, 50, 0, -1);
  myArrayOfSquares[74] = new squares(900, 700, "yellow", 950, 950, 50, 50, 1, -1);
  myArrayOfSquares[75] = new squares(700, 800, "lime", 950, 950, 50, 50, -1, 0);
  myArrayOfSquares[76] = new squares(800, 800, "green", 950, 950, 50, 50, 1, 0);
  myArrayOfSquares[77] = new squares(900, 800, "indigo", 950, 950, 50, 50, 1, 0);
  myArrayOfSquares[78] = new squares(700, 900, "purple", 950, 950, 50, 50, -1, 1);
  myArrayOfSquares[79] = new squares(800, 900, "grey", 950, 950, 50, 50, 0, 1);
  myArrayOfSquares[80] = new squares(900, 900, "white", 950, 950, 50, 50, 1, 1);

  canvasArray[0].clear();
  canvasArray[0].background("black");
  canvasArray[0].stroke("red");
  canvasArray[0].fill("black");
  canvasArray[0].strokeWeight(10);
  canvasArray[0].rect(0, 0, 1000, 1000);

}

function draw() {




  for (var index = 0; index < myArrayOfSquares.length; index++) {
    myArrayOfSquares[index].display();

  }
  image(canvasArray[0], 0, 0);

  canvasArray[0].clear();
  canvasArray[0].background(0);
  canvasArray[0].stroke("red");
  canvasArray[0].fill("black");
  canvasArray[0].strokeWeight(10);
  canvasArray[0].rect(0, 0, 1000, 1000);


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
  this.tempX = 0;
  this.tempY = 0;
  this.colorArray = get(0, 0);

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




  this.checkCorner = function name() {



    //northwest
    if (this.xDirection == -1 && this.yDirection == -1) {
      this.tempX = this.xLocation;
      this.tempY = this.yLocation;

    }
    // northeast
    else if (this.xDirection == 1 && this.yDirection == -1) {
      this.tempX = this.xLocation + this.xDirection + 50;
      this.tempY = this.yLocation + this.yDirection;

    }
    //Southwest
    else if (this.xDirection == -1 && this.yDirection == 1) {
      this.tempX = this.xLocation + this.xDirection;
      this.tempY = this.yLocation + this.yDirection + 50;


    }
    //southeast
    else if (this.xDirection == 1 && this.yDirection == 1) {
      this.tempX = this.xLocation + 50;
      this.tempY = this.yLocation + 50;





    }



    this.colorArray = get(this.tempX, this.tempY);


    var firstTest = this.colorArray[0] != 0 || this.colorArray[1] != 0 || this.colorArray[2] != 0;



    if (firstTest) {
      this.xDirection = this.xDirection * - 1;
      this.yDirection = this.yDirection * - 1;


    }
    if (true) {
      print("The Result set for a " + squareColour + " set")
      print("Boolean evaluation for firstTest = " + firstTest)
      print("Print Color Red: " + this.colorArray[0])
      print("Print Color Green: " + this.colorArray[1])
      print("Print Color Blue: " + this.colorArray[2])
      print("This yDirection: " + this.yDirection);
      print("This xDirection: " + this.xDirection);
      print("This xLocation: " + this.xLocation);
      print("This yLocation: " + this.yLocation);
      print("This tempX: " + this.tempX);
      print("This tempY: " + this.tempY);
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


    this.collisionCheck();



    this.moveSquare();
















  }



}