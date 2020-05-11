var weather;
var weather2;
var weather3;
var temp = 0;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;

function setup() {
  createCanvas(1920, 1080);
  background(200);
  // HERE Is the call to get the weather. PLEASE PUT YOUR OWN ID IN HERE!!!
  // MINE WILL STOP WORKING IF EVERYONE USES IT!!!

  var myJSONString =
    "https://api.openweathermap.org/data/2.5/weather?zip=61701,us&units=imperial&";
  var myIDString = "appid=94d38ad7a1b59048850f623829b90cdf"; // Take out the x’s and ADD YOUR ID!!!
  loadJSON(myJSONString + myIDString, gotData); // look - that gotData function happens when JSON comes back.

  var myJSONString =
    "https://api.openweathermap.org/data/2.5/weather?zip=60007,us&units=imperial&";
  var myIDString = "appid=94d38ad7a1b59048850f623829b90cdf"; // Take out the x’s and ADD YOUR ID!!!
  loadJSON(myJSONString + myIDString, gotData2); // look - that gotData function happens when JSON comes back.

  var myJSONString =
    "https://api.openweathermap.org/data/2.5/weather?zip=20500,us&units=imperial&";
  var myIDString = "appid=94d38ad7a1b59048850f623829b90cdf"; // Take out the x’s and ADD YOUR ID!!!
  loadJSON(myJSONString + myIDString, gotData3); // look - that gotData function happens when JSON comes back.
}

function gotData(data) {
  weather = data;
  console.log(data); // for debugging purposes, print out the JSON data when we get it.
}

function gotData2(data) {
  weather2 = data;
  console.log(data); // for debugging purposes, print out the JSON data when we get it.
}

function gotData3(data) {
  weather3 = data;
  console.log(data); // for debugging purposes, print out the JSON data when we get it.
}

function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:

      fill(color(0, 0, 255));
      text("In " + weather.name + " todays weather is:  ", 20, 30);
      text("Current Temperature: " + weather.main.temp + "° ", 20, 40);
      text("Today's High Temperature: " + weather.main.temp_min + "° ", 20, 50);
      text("Today's Low Temperature:  " + weather.main.temp_max + "° ", 20, 60);
      rect(320, 20, 10, weather.main.temp * 2.5);


      myState = 2;
      break;
    case 2:
      fill('#222222');
      text("In " + weather2.name + " todays weather is:  ", 20, 90);
      text("Current Temperature: " + weather2.main.temp + "° ", 20, 100);
      text("Today's High Temperature: " + weather2.main.temp_min + "° ", 20, 110);
      text("Today's Low Temperature:  " + weather2.main.temp_max + "° ", 20, 120);

      rect(340, 20, 10, weather2.main.temp * 2.5);


      myState = 3;
      break;
    case 3:

      fill('red');
      text("In " + weather3.name + " todays weather is:  ", 20, 140);
      text("Current Temperature: " + weather3.main.temp + "° ", 20, 150);
      text("Today's High Temperature:" + weather3.main.temp_min + "° ", 20, 160);
      text("Today's Low Temperature: " + weather3.main.temp_max + "° ", 20, 170);
      rect(360, 20, 10, weather3.main.temp * 2.5);


      break;
  }
  fill(0);
  text("Temperature Graph", 320, 10)
}