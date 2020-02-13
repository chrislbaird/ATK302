var height = 500;
var width = 500;
var caseIndex = 0;



function setup() {
  createCanvas(500, 500);
}

function draw() {


 fill(0);
 rect(100, 100, 100, 100);
 background(255);

 switch(caseIndex) {
   case 0:
     text('Case 1', 10, 30);
     break;
   case 1:
    text('Case 2', 10, 30);
     break;
   case 2:
    text('Case   3', 10, 30);
    break;
   case 3:
    text('Case   4', 10, 30);
    break;




 }







}


function mousePressed() {

 caseIndex = (caseIndex + 1) % 4;


}
