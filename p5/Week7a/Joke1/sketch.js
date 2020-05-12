var myState = 0


function setup() {
  createCanvas(500, 500);
}

function draw() {

  switch (myState) {

    case 0:
      background(128);
      text("What is the best thing to do if your program does not run?", 100, 100);

      break;

    case 1:
      background(128);

      text("Change Nothing in the code and run the program again.", 100, 100);

      break;



  }





}

function mouseClicked() {
  myState = (myState + 1) % 2;

  console.log(myState);


}